// Server-only module. Never import this from client (src/) code —
// it reads the service-account private key file from disk.
import fs from 'node:fs'
import path from 'node:path'
import { google } from 'googleapis'

export class GoogleSheetsConfigError extends Error {}
export class GoogleSheetsApiError extends Error {}

function loadConfig(env) {
  const sheetId = env.GOOGLE_SHEET_ID
  const sheetName = env.GOOGLE_SHEET_NAME
  const inlineJson = env.GOOGLE_SERVICE_ACCOUNT_JSON
  const keyFileRelative = env.GOOGLE_SERVICE_ACCOUNT_FILE

  if (!sheetId) {
    throw new GoogleSheetsConfigError('GOOGLE_SHEET_ID חסר — הגדירו אותו במשתני הסביבה')
  }
  if (!sheetName) {
    throw new GoogleSheetsConfigError('GOOGLE_SHEET_NAME חסר — הגדירו אותו במשתני הסביבה')
  }
  if (!inlineJson && !keyFileRelative) {
    throw new GoogleSheetsConfigError('חסרים credentials — הגדירו GOOGLE_SERVICE_ACCOUNT_JSON (מומלץ ב-Vercel) או GOOGLE_SERVICE_ACCOUNT_FILE (לפיתוח מקומי)')
  }

  // GOOGLE_SERVICE_ACCOUNT_JSON (the full key file's contents, as an env var) takes
  // priority — Vercel/serverless hosts have no writable/committed secrets/ folder,
  // so the file-path option is for local dev only.
  if (inlineJson) {
    let credentials
    try {
      credentials = JSON.parse(inlineJson)
    } catch {
      throw new GoogleSheetsConfigError('GOOGLE_SERVICE_ACCOUNT_JSON אינו JSON תקין')
    }
    return { sheetId, sheetName, credentials, cacheKey: credentials.client_email || 'inline-json' }
  }

  const keyFilePath = path.resolve(process.cwd(), keyFileRelative)
  if (!fs.existsSync(keyFilePath)) {
    throw new GoogleSheetsConfigError(`קובץ ה-Service Account לא נמצא בנתיב: ${keyFileRelative}`)
  }

  return { sheetId, sheetName, keyFilePath, cacheKey: keyFilePath }
}

// Cached per unique credential source so config errors don't get cached as a rejected promise.
const clientCache = new Map()

function getSheetsClient({ cacheKey, credentials, keyFilePath }) {
  if (!clientCache.has(cacheKey)) {
    const clientPromise = (async () => {
      const auth = new google.auth.GoogleAuth({
        ...(credentials ? { credentials } : { keyFile: keyFilePath }),
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      })
      const authClient = await auth.getClient()
      return google.sheets({ version: 'v4', auth: authClient })
    })()
    clientPromise.catch(() => clientCache.delete(cacheKey))
    clientCache.set(cacheKey, clientPromise)
  }
  return clientCache.get(cacheKey)
}

function translateGoogleError(err, sheetName) {
  const status = err?.response?.status ?? err?.code
  const message = err?.response?.data?.error?.message || err?.message || ''

  if (status === 403 && /disabled/i.test(message)) {
    return new GoogleSheetsApiError('Google Sheets API אינו מופעל בפרויקט ה-Google Cloud של ה-Service Account')
  }
  if (status === 403) {
    return new GoogleSheetsApiError('לחשבון השירות אין הרשאת צפייה בגיליון — ודאו ששיתפתם אותו כ-Viewer')
  }
  if (status === 400 && /unable to parse range/i.test(message)) {
    return new GoogleSheetsApiError(`הגיליון "${sheetName}" לא נמצא במסמך — בדקו את GOOGLE_SHEET_NAME`)
  }
  if (status === 404) {
    return new GoogleSheetsApiError('ה-Spreadsheet לא נמצא — בדקו את GOOGLE_SHEET_ID')
  }
  return new GoogleSheetsApiError(`שגיאה בקריאה מ-Google Sheets: ${message || 'unknown error'}`)
}

function isActiveValue(raw) {
  if (raw === true) return true
  return String(raw ?? '').trim().toUpperCase() === 'TRUE'
}

// paymentUrl is free-text in the sheet — never let a javascript:/data: scheme
// (typo or malicious edit) leave the server as a usable href.
function isSafeHttpUrl(value) {
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:'
  } catch {
    return false
  }
}

function rowToFundraiser(row) {
  const [ref, name, paymentUrl, activeRaw] = row
  if (!ref || !String(ref).trim()) return null
  const trimmedUrl = paymentUrl ? String(paymentUrl).trim() : ''
  return {
    ref: String(ref).trim(),
    name: name ? String(name).trim() : '',
    paymentUrl: isSafeHttpUrl(trimmedUrl) ? trimmedUrl : '',
    active: isActiveValue(activeRaw),
  }
}

export async function getAllFundraisers(env = process.env) {
  const config = loadConfig(env)
  const sheets = await getSheetsClient(config)
  const range = `'${config.sheetName}'!A2:D`

  let response
  try {
    response = await sheets.spreadsheets.values.get({ spreadsheetId: config.sheetId, range })
  } catch (err) {
    throw translateGoogleError(err, config.sheetName)
  }

  const rows = response.data.values || []
  return rows.map(rowToFundraiser).filter(Boolean)
}

export async function getFundraiserByRef(ref, env = process.env) {
  if (!ref || !String(ref).trim()) return null
  const fundraisers = await getAllFundraisers(env)
  const target = String(ref).trim()
  return fundraisers.find((f) => f.active && f.ref === target) ?? null
}
