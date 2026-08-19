// Server-only. Resolves the absolute site URL for the few things that
// genuinely need one (metadataBase, canonical, OG/Twitter, sitemap).
//
// Internal links — including ?ref=... — must NEVER use this. They stay
// relative (e.g. `/?ref=${ref}`, or built from window.location on the client)
// so a Vercel Preview deployment links within itself instead of to Production.
//
// NEXT_PUBLIC_SITE_URL should be set on the Production environment only (in
// Vercel's dashboard, uncheck it for Preview/Development). Preview then falls
// through to VERCEL_URL, which Vercel injects automatically per-deployment.
export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return 'http://localhost:3000'
}
