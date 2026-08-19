import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'הצהרת נגישות — נותנים מהנשמה',
}

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-right">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4">הצהרת נגישות</h1>
        <p className="text-sm text-on-surface-variant mb-10">עדכון אחרון: ינואר 2026</p>

        <div className="space-y-10 text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">מחויבות לנגישות</h2>
            <p>עמותת "נותנים מהנשמה" מחויבת להנגיש את אתר האינטרנט שלה לאנשים עם מוגבלויות. אנו עובדים באופן מתמיד לשיפור הנגישות של האתר בהתאם לתקן WCAG 2.1 ברמה AA.</p>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">אמצעי נגישות באתר</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>כל הדפים מוגדרים בכיוון ימין לשמאל (RTL) בעברית</li>
              <li>תגיות ARIA לשיפור קריאת מסך</li>
              <li>ניווט מקלדת מלא</li>
              <li>קישור "דלג לתוכן" בתחילת כל דף</li>
              <li>יחס ניגודיות צבעים עומד בדרישות WCAG AA</li>
              <li>תמונות מלוות בטקסט חלופי</li>
              <li>תמיכה בהעדפת הפחתת תנועה (prefers-reduced-motion)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">פניות בנושא נגישות</h2>
            <p>אם נתקלתם בבעיית נגישות באתר, נשמח לשמוע ולטפל בכך. ניתן לפנות אלינו דרך <Link href="/contact" className="text-primary font-bold hover:underline">דף יצירת הקשר</Link>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
