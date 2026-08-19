import './globals.css'
import Providers from './providers'
import { getSiteUrl } from '../lib/siteUrl'

const SITE_TITLE = 'נותנים מהנשמה — לא משאירים ילד רעב'
const SITE_DESCRIPTION = 'עמותת נותנים מהנשמה עוזרת בכל יום לעשרות משפחות וילדים בקנייה של אוכל עד הבית. תרמו ועזרו לנו לדאוג שאף ילד לא יישאר רעב.'
const SOCIAL_IMAGE = '/attachments/4c114341-9fbf-4410-973b-109c43d55c51.jpeg'

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: { icon: '/attachments/fevo.icon.png' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: SOCIAL_IMAGE, alt: 'מתנדבי עמותת נותנים מהנשמה — לא משאירים ילד רעב' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#215487',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preload" as="image" href={SOCIAL_IMAGE} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Noto+Serif+Hebrew:wght@400;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
