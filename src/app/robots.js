// Production domain fallback so sitemap/robots never point at a preview or localhost URL.
const PROD_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://donate.notnim.info').replace(/\/$/, '')

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${PROD_URL}/sitemap.xml`,
  }
}
