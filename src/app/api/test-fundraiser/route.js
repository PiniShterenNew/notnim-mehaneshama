import { NextResponse } from 'next/server'
import { getFundraiserByRef, GoogleSheetsConfigError } from '../../../../server/googleSheets.js'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const ref = searchParams.get('ref')

  try {
    const fundraiser = await getFundraiserByRef(ref)

    if (!fundraiser) {
      return NextResponse.json({ ok: false, fundraiser: null })
    }

    return NextResponse.json({
      ok: true,
      fundraiser: { ref: fundraiser.ref, name: fundraiser.name, paymentUrl: fundraiser.paymentUrl },
    })
  } catch (err) {
    const status = err instanceof GoogleSheetsConfigError ? 500 : 502
    console.error('[api/test-fundraiser]', err.message)
    return NextResponse.json({ ok: false, error: err.message }, { status })
  }
}
