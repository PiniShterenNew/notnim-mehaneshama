// Production domain fallback so sitemap/robots never point at a preview or localhost URL.
const PROD_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://donate.notnim.info').replace(/\/$/, '')

export default function sitemap() {
  const base = PROD_URL
  const routes = ['', '/contact', '/accessibility', '/privacy', '/terms']
  return routes.map((r) => ({
    url: `${base}${r || '/'}`,
    lastModified: new Date(),
    changeFrequency: r ? 'yearly' : 'weekly',
    priority: r ? 0.3 : 1,
  }))
}
