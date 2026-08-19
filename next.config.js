import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // A stray package-lock.json in the parent folder (C:\Users\User\Desktop\pini-doc)
  // was making Next.js misdetect the workspace root — pin it explicitly.
  outputFileTracingRoot: __dirname,
}

export default nextConfig
