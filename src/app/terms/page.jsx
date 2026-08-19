import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'תנאי שימוש — נותנים מהנשמה',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-right">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4">תנאי שימוש</h1>
        <p className="text-sm text-on-surface-variant mb-10">עדכון אחרון: ינואר 2026</p>

        <div className="space-y-10 text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">1. כללי</h2>
            <p>ברוכים הבאים לאתר עמותת "נותנים מהנשמה". השימוש באתר זה מהווה הסכמה לתנאי השימוש המפורטים להלן. אם אינכם מסכימים לתנאים אלה, אנא הימנעו משימוש באתר.</p>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">2. מטרת האתר</h2>
            <p>אתר זה נועד לספק מידע על פעילות העמותה ולאפשר לגולשים לתרום למטרות העמותה. העמותה שומרת לעצמה את הזכות לשנות את תוכן האתר בכל עת וללא הודעה מוקדמת.</p>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">3. תרומות</h2>
            <p>כל התרומות מעובדות דרך מערכת תשלומים מאובטחת של צד שלישי. העמותה אינה שומרת פרטי אשראי. לאחר ביצוע תרומה, תישלח קבלה לכתובת המייל שסיפקתם.</p>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">4. קניין רוחני</h2>
            <p>כל התכנים באתר זה, לרבות טקסטים, תמונות, לוגו וגרפיקה, הם רכוש העמותה ומוגנים בזכויות יוצרים. אין להעתיק, לשכפל או להפיץ תכנים אלה ללא אישור מפורש בכתב מהעמותה.</p>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">5. הגבלת אחריות</h2>
            <p>העמותה עושה כמיטב יכולתה לוודא שהמידע באתר מדויק ועדכני, אך אינה אחראית לשגיאות או השמטות. האתר מסופק "כמות שהוא" ללא כל אחריות.</p>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">6. יצירת קשר</h2>
            <p>לשאלות בנוגע לתנאי השימוש ניתן לפנות אלינו דרך <Link href="/contact" className="text-primary font-bold hover:underline">דף יצירת הקשר</Link>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
