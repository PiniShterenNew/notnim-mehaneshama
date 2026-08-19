import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'מדיניות פרטיות — נותנים מהנשמה',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-right">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4">מדיניות פרטיות</h1>
        <p className="text-sm text-on-surface-variant mb-10">עדכון אחרון: ינואר 2026</p>

        <div className="space-y-10 text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">1. איסוף מידע</h2>
            <p>אנו אוספים מידע שאתם מספקים לנו ישירות בעת ביצוע תרומה, לרבות שם, כתובת מייל ופרטי תשלום. פרטי התשלום מעובדים ישירות על ידי ספק שירותי התשלומים ואינם נשמרים על שרתינו.</p>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">2. שימוש במידע</h2>
            <p>המידע שנאסף משמש אותנו לצורך עיבוד תרומות, שליחת קבלות ועדכונים על פעילות העמותה. איננו מוכרים או משתפים את המידע האישי שלכם עם צדדים שלישיים לצורכי שיווק.</p>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">3. אבטחת מידע</h2>
            <p>אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלכם. עם זאת, אין אנו יכולים להבטיח אבטחה מלאה של המידע המועבר דרך האינטרנט.</p>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">4. עוגיות (Cookies)</h2>
            <p>אתר זה עשוי להשתמש בעוגיות לצורך שיפור חוויית הגלישה. ניתן להגדיר את הדפדפן לדחות עוגיות, אך הדבר עלול לפגוע בפונקציונליות מסוימת של האתר.</p>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">5. זכויותיכם</h2>
            <p>בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, הנכם רשאים לבקש לעיין במידע האישי שנאסף עליכם, לתקנו או למחקו. לצורך כך, אנא פנו אלינו דרך <Link href="/contact" className="text-primary font-bold hover:underline">דף יצירת הקשר</Link>.</p>
          </section>
          <section>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-3">6. יצירת קשר</h2>
            <p>לשאלות בנוגע למדיניות הפרטיות ניתן לפנות אלינו דרך <Link href="/contact" className="text-primary font-bold hover:underline">דף יצירת הקשר</Link>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
