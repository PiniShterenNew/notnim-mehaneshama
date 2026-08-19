'use client'

import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { WHATSAPP_CONTACT, buildWhatsappShareUrl } from '../config'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useFundraiser } from '../context/FundraiserContext'

const WA_SVG_LG = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

const WA_MESSAGES = [
  { src: '/attachments/IMG_8327.jpeg', alt: 'הודעת תודה ממשפחה שקיבלה סל מזון 1' },
  { src: '/attachments/IMG_8328.jpeg', alt: 'הודעת תודה ממשפחה שקיבלה סל מזון 2' },
  { src: '/attachments/IMG_8329.jpeg', alt: 'הודעת תודה ממשפחה שקיבלה סל מזון 3' },
  { src: '/attachments/IMG_8330.jpeg', alt: 'הודעת תודה ממשפחה שקיבלה סל מזון 4' },
]

function WATestimonialsSection() {
  return (
    <section id="whatsapp-testimonials" className="py-28 md:py-36 bg-surface-container" aria-label="הודעות תודה אמיתיות">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-tertiary">ישיר מהשטח</p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">הם כבר כתבו לנו</h2>
          <p className="text-on-surface-variant text-lg max-w-md mx-auto leading-relaxed">הודעות אמיתיות ממשפחות שקיבלו סל מזון</p>
        </div>
        {/* sm: 1 col → md: 2 col → lg: 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {WA_MESSAGES.map(({ src, alt }) => (
            <figure key={src} className="phone-mockup w-full max-w-[280px]" aria-label={alt}>
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <img src={src} alt={alt} loading="lazy" decoding="async" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  useScrollReveal()
  const heroRef = useRef(null)
  const stickyRef = useRef(null)
  const { donationUrl } = useFundraiser()
  const whatsappShareUrl = buildWhatsappShareUrl(donationUrl)

  // Sticky mobile CTA
  useEffect(() => {
    const sticky = stickyRef.current
    const hero = heroRef.current
    if (!sticky || !hero || !window.matchMedia('(max-width: 767px)').matches) return
    const obs = new IntersectionObserver(
      ([entry]) => sticky.classList.toggle('visible', !entry.isIntersecting),
      { threshold: 0 }
    )
    obs.observe(hero)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded-lg font-bold">דלג לתוכן הראשי</a>

      {/* Sticky Mobile CTA */}
      <div ref={stickyRef} id="mobile-sticky" className="md:hidden" role="complementary" aria-label="תרומה מהירה">
        <span className="text-sm text-on-surface-variant font-medium">כל תרומה מכניסה אוכל לבית</span>
        <a href={donationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary-gradient px-6 py-2.5 text-sm whitespace-nowrap">לתרומה עכשיו</a>
      </div>

      <Navbar />

      <main id="main">
        {/* 1. Intro */}
        <section id="intro" className="min-h-screen flex flex-col items-center justify-center bg-background hero-ambient px-6 text-center relative overflow-hidden" aria-label="פתיחה רגשית">
          <div className="absolute top-[12%] right-[-6%] w-[32rem] h-[32rem] bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>
          <div className="absolute bottom-[8%] left-[-6%] w-[28rem] h-[28rem] bg-tertiary-fixed/12 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>
          <div className="max-w-2xl space-y-8 relative z-10">
            <p className="text-xs font-bold tracking-[0.2em] text-tertiary uppercase fade-1 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm" aria-hidden="true" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
              עמותת נותנים מהנשמה
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-on-surface leading-[1.15] fade-2">
              אם הגעתם לכאן, כנראה שאתם לא אנשים שחושבים רק על עצמם.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed fade-3">
              אתם אנשי אור שרוצים לעשות טוב וחסד בעולם. אז הגעתם בדיוק למקום הנכון.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 fade-4">
              <a href={donationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary-gradient inline-flex items-center justify-center gap-2 px-10 py-4 text-lg">
                לתרומה עכשיו
                <span className="material-symbols-outlined text-lg" aria-hidden="true" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
              </a>
              <a href="#hero" className="btn-ghost inline-flex items-center justify-center gap-1.5 px-8 py-4 text-base">
                הכירו את הסיפור
                <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_downward</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. Hero */}
        <section ref={heroRef} id="hero" className="relative md:min-h-[760px] md:flex md:items-center overflow-hidden" aria-label="גיבור הדף">
          <div className="hidden md:block absolute inset-0 z-0" aria-hidden="true">
            <img alt="" className="w-full h-full object-cover object-center" style={{filter: 'grayscale(14%) brightness(82%)'}} src="/attachments/4c114341-9fbf-4410-973b-109c43d55c51.jpeg" />
            <div className="absolute inset-0 bg-gradient-to-l from-background via-background/75 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-10 md:py-24">
            <div className="max-w-lg text-right space-y-5 md:space-y-7">
              <span className="inline-block px-5 py-2 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-sm tracking-wide">לא משאירים ילד רעב</span>
              <h2 className="text-3xl md:text-6xl lg:text-[4.5rem] font-headline font-black text-on-surface leading-[1.08] tracking-tight">
                עוזרים לעשרות<br />משפחות<br /><span className="text-primary">כל יום</span>
              </h2>
              <p className="text-base md:text-xl text-on-surface-variant max-w-md leading-relaxed">
                עמותת "נותנים מהנשמה" עוזרת בכל יום לעשרות משפחות וילדים בקנייה של אוכל עד הבית.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a href={donationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary-gradient px-8 md:px-10 py-3.5 md:py-4 text-base md:text-lg">לתרומה עכשיו</a>
                <a href="#video" className="btn-ghost bg-surface-container-highest/50 md:backdrop-blur-sm px-6 md:px-8 py-3.5 md:py-4 text-base md:text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined" aria-hidden="true">play_circle</span>
                  צפו בסרטון
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:gap-5 text-on-surface-variant/80 text-xs md:text-sm font-medium pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[1.1rem]" aria-hidden="true" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
                  תרומה מאובטחת
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[1.1rem]" aria-hidden="true" style={{fontVariationSettings: "'FILL' 1"}}>volunteer_activism</span>
                  סיוע אמיתי
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[1.1rem]" aria-hidden="true" style={{fontVariationSettings: "'FILL' 1"}}>local_shipping</span>
                  חלוקה ישירה לבית
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Founder Story */}
        <section id="stories" className="py-28 md:py-36 bg-surface-container-low" aria-label="הסיפור שמאחורינו">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
              <div className="relative rounded-3xl overflow-hidden img-brand asymmetric-card-right shadow-2xl md:-rotate-1 transform">
                <img alt="מתנדבי עמותת נותנים מהנשמה מתכנסים יחד לפרויקט חסד" loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover object-top hover:scale-[1.03] transition-transform duration-700" src="/attachments/4c114341-9fbf-4410-973b-109c43d55c51.jpeg" />
              </div>
              <div className="space-y-7 text-right">
                <p className="text-xs font-bold tracking-[0.2em] text-tertiary uppercase">הסיפור שמאחורינו</p>
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface leading-tight">
                  מסיפור אישי<br /><span className="text-primary">לשליחות לאומית</span>
                </h2>
                <p className="text-xl text-on-surface-variant leading-relaxed">
                  נחמן ישי ונחמן פרץ עברו בילדותם גם חוויה של רעב, והחליטו שהם יעשו הכל שאף ילד לא יישאר רעב.
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  בתרומה שלכם אתם תהיו שותפים בקנייה עבור משפחה, ותדאגו שבעזרת השם ילדים לא יישארו רעבים.
                </p>
                <div className="w-14 h-0.5 bg-tertiary rounded-full"></div>
                <blockquote className="text-lg font-headline font-bold text-primary italic leading-relaxed">
                  "זה לא רק האוכל, זה הידיעה שמישהו חשב עלינו."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Video */}
        <section id="video" className="py-24 md:py-32 bg-surface relative overflow-hidden" aria-label="סרטון הארגון">
          <div className="absolute top-[-20%] right-[-10%] w-[36rem] h-[36rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>
          <div className="absolute bottom-[-15%] left-[-8%] w-[28rem] h-[28rem] bg-tertiary/4 rounded-full blur-[80px] pointer-events-none" aria-hidden="true"></div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-14 space-y-4">
              <p className="text-xs font-bold tracking-[0.2em] text-tertiary uppercase">צפו והתרגשו</p>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">
                הכירו את הסיפור<br /><span className="text-primary">שמאחורי העשייה</span>
              </h2>
              <p className="text-on-surface-variant text-lg">מסע של נתינה בלב הקהילה הישראלית</p>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-inverse-surface" style={{boxShadow: '0 25px 60px rgba(27,28,25,0.15), 0 8px 20px rgba(27,28,25,0.08)'}}>
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-tertiary/15 pointer-events-none z-10" aria-hidden="true"></div>
              <iframe
                src="https://drive.google.com/file/d/1AuUyl6J7ssj8SnQtlyh74vghPPmZEaN6/preview"
                title="סרטון על פעילות עמותת נותנים מהנשמה"
                className="absolute inset-0 w-full h-full border-0 rounded-3xl"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* 5. Who We Help */}
        <section id="who-we-help" className="py-28 md:py-36 bg-surface-container-low" aria-label="מי אנחנו עוזרים">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface">
                האנשים<br /><span className="text-primary">שזקוקים לנו</span>
              </h2>
              <p className="text-on-surface-variant text-lg max-w-xl mx-auto leading-relaxed">בכל יום אנחנו מגיעים לבתים שעבורם כל קופסה היא עולם.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: 'family_restroom', color: 'text-secondary', bg: 'bg-secondary/8', title: 'משפחות נזקקות', desc: 'משפחות שמתמודדות עם קשיים כלכליים ומנסות לשמור על שגרה בכבוד.' },
                { icon: 'person_2',        color: 'text-tertiary',  bg: 'bg-tertiary/8',  title: 'אמהות חד-הוריות', desc: 'נשים לוחמות שמגדלות את ילדיהן לבד וזקוקות לעזרה.' },
                { icon: 'child_care',      color: 'text-primary',   bg: 'bg-primary/8',   title: 'ילדים', desc: 'ילדים שגדלים בבתים עם אי-ביטחון תזונתי ומגיעים אלינו ליום טוב יותר.' },
                { icon: 'elderly',         color: 'text-secondary', bg: 'bg-secondary-container/30', title: 'קשישים ואלמנות', desc: 'אנשים שנותרו לבדם וזקוקים לביטחון תזונתי ולחברה חמה.' },
              ].map(({ icon, color, bg, title, desc }) => (
                <div key={title} className="group bg-surface-container-lowest p-8 rounded-3xl space-y-5 text-right border border-outline-variant/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className={`material-symbols-outlined ${color} text-3xl`} aria-hidden="true">{icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface">{title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Impact */}
        <section id="impact" className="py-32 md:py-40 px-6 bg-primary text-white relative overflow-hidden" aria-label="ההשפעה שלנו">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '48px 48px'}}></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-headline font-bold">התרומה שלכם<br />הופכת לעזרה אמיתית</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">כל שקל שנתרם מגיע ישירות לשדה — לסל מזון, לחיוך של ילד, לרגע של כבוד.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: 'shopping_basket',  title: 'אוכל מגיע הביתה',     desc: 'אנחנו קונים מוצרי מזון ומביאים אותם ישירות לבית של כל משפחה.' },
                { icon: 'child_friendly',   title: 'ילדים הולכים שבעים',  desc: 'התרומה שלכם מבטיחה שילדים לא יישארו רעבים — בעזרת השם.' },
                { icon: 'favorite',         title: 'כבוד ותקווה',          desc: 'אתם לא רק שולחים אוכל — אתם שולחים את הידיעה שמישהו חשב עליהם.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="text-center space-y-5">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto hover:bg-white/15 transition-colors">
                    <span className="material-symbols-outlined text-4xl text-secondary-fixed" aria-hidden="true" style={{fontVariationSettings: "'FILL' 1"}}>{icon}</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold">{title}</h3>
                  <p className="text-white/65 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <a href={donationUrl} target="_blank" rel="noopener noreferrer" className="btn-tertiary-gradient inline-flex items-center gap-3 px-14 py-5 text-xl font-black">
                לתרומה עכשיו
                <span className="material-symbols-outlined" aria-hidden="true" style={{fontVariationSettings: "'FILL' 1"}}>open_in_new</span>
              </a>
            </div>
          </div>
        </section>

        {/* 7. Gallery */}
        <section id="gallery" className="py-28 md:py-36 bg-surface-container-low overflow-hidden" aria-label="גלריית פעילות">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-right mb-14 space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">
                העשייה שלנו<br /><span className="text-primary">בשטח</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-5 gap-6 items-stretch">
              <div className="md:col-span-3 relative rounded-3xl overflow-hidden img-brand asymmetric-card-right shadow-xl">
                <img alt="מאות מתנדבים של עמותת נותנים מהנשמה" loading="lazy" decoding="async" className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700" style={{minHeight: '420px'}} src="/attachments/4c114341-9fbf-4410-973b-109c43d55c51.jpeg" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-on-surface/50 to-transparent p-8">
                  <p className="text-white font-bold text-lg text-right font-headline">מתנדבי נותנים מהנשמה — לא משאירים ילד רעב</p>
                </div>
              </div>
              <div className="md:col-span-2 quote-card bg-surface-container-lowest rounded-3xl shadow-xl p-9 flex flex-col justify-center gap-6 text-right">
                <span className="material-symbols-outlined text-tertiary text-4xl" aria-hidden="true" style={{fontVariationSettings: "'FILL' 1"}}>volunteer_activism</span>
                <blockquote className="text-xl font-headline font-bold text-on-surface leading-relaxed">
                  "זה לא רק האוכל, זה הידיעה שמישהו חשב עלינו."
                </blockquote>
                <p className="text-on-surface-variant leading-relaxed">כל תמונה כאן היא בית אחד שלא נשאר לבד. תודה שאתם חלק מזה.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. About */}
        <section id="about" className="py-28 md:py-36 bg-inverse-surface relative overflow-hidden" aria-label="אודות הארגון">
          <div className="absolute top-0 start-0 w-96 h-96 bg-primary/12 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
              <div className="space-y-8 text-right">
                <p className="text-xs font-bold tracking-[0.2em] text-inverse-primary uppercase">אודות העמותה</p>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-inverse-on-surface leading-tight">מי אנחנו?</h2>
                <p className="text-lg text-inverse-on-surface leading-relaxed">
                  עמותת "נותנים מהנשמה" הוקמה מתוך שליחות אחת: לוודא שאף ילד בישראל לא יישאר רעב. אנחנו פועלים עם רשת של מתנדבים הפרוסים בכל הארץ, ומגיעים ישירות לבתי המשפחות עם אוכל וכבוד. השקיפות היא נר לרגלנו — כל שקל שמגיע אלינו מתורגם ישירות למזון ולסיוע בשטח. אנחנו מזמינים אתכם להיות חלק מהמשפחה שלנו.
                </p>
                <a href={donationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 text-sm">
                  לתרומה עכשיו
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">open_in_new</span>
                </a>
              </div>
              <div className="rounded-3xl p-10 space-y-7 text-right" style={{background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'}}>
                <h3 className="text-xl font-headline font-bold text-inverse-on-surface">סטנדרטים של שקיפות</h3>
                <ul className="space-y-5" role="list">
                  {['אישור ניהול תקין בתוקף', 'זיכוי ממס לפי סעיף 46', 'דוחות כספיים שקופים לציבור'].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-inverse-primary shrink-0" aria-hidden="true" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      <span className="text-inverse-on-surface">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={donationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 text-sm">
                  לתרומה עכשיו
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 9. WhatsApp Testimonials */}
        <WATestimonialsSection />

        {/* 10. FAQ */}
        <section id="faq" className="py-28 md:py-36 bg-surface-container-low" aria-label="שאלות נפוצות">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center text-on-surface mb-14">שאלות נפוצות</h2>
            <div className="space-y-3">
              {[
                { q: 'האם התרומה מוכרת לצרכי מס?', a: 'כן, העמותה בעלת אישור מוסד ציבורי לעניין תרומות לפי סעיף 46 לפקודת מס הכנסה. קבלה תישלח אליכם אוטומטית למייל לאחר ביצוע התרומה.' },
                { q: 'איך מתבצעת חלוקת המזון?', a: 'החלוקה מתבצעת על ידי מערך מתנדבים מסור ישירות לבתי המשפחות בפריסה ארצית, תוך שמירה על דיסקרטיות וכבוד התא המשפחתי.' },
                { q: 'האם ניתן לתרום מוצרי מזון פיזית?', a: 'בהחלט. ניתן ליצור קשר עם המוקד שלנו לתיאום נקודות איסוף למוצרים יבשים וכשרים.' },
                { q: 'איך אפשר לדעת שהתרומה מגיעה ליעדה?', a: 'העמותה פועלת בשקיפות מלאה עם אישור ניהול תקין ודוחות כספיים פומביים. כל שקל מתורגם ישירות לאוכל ולסיוע בשטח.' },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/8 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer text-right hover:bg-surface-container-high/25 transition-colors">
                    <h3 className="font-headline font-bold text-base text-on-surface">{q}</h3>
                    <span className="material-symbols-outlined text-on-surface-variant shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 text-on-surface-variant leading-relaxed text-right text-sm font-body">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Final CTA */}
        <section id="final-cta" className="py-32 md:py-40 bg-inverse-surface relative overflow-hidden" aria-label="קריאה לפעולה סופית">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 start-1/4 w-96 h-96 bg-primary/18 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 end-1/4 w-72 h-72 bg-tertiary/14 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">
            <p className="text-xs font-bold tracking-[0.2em] text-inverse-primary uppercase">תודה שאתם כאן</p>
            <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight text-inverse-on-surface">
              תודה שאתם בוחרים לפתוח את הלב ולהיות <span className="text-inverse-primary">האור של המשפחות האלו.</span>
            </h2>
            <p className="text-xl md:text-2xl text-inverse-on-surface/80 max-w-2xl mx-auto leading-relaxed">
              כל תרומה היא עולם ומלואו עבורם. אשריכם ותודה שאתם פותחים את הלב.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a href={donationUrl} target="_blank" rel="noopener noreferrer" className="btn-tertiary-gradient px-14 py-5 text-xl font-black">לתרומה עכשיו</a>
              <a href={WHATSAPP_CONTACT} target="_blank" rel="noopener noreferrer" className="text-inverse-on-surface px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-colors" style={{border: '1.5px solid rgba(255,255,255,0.25)'}}>ליצירת קשר עם המוקד</a>
              <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-5 rounded-full text-base font-bold hover:bg-[#1ebe5d] transition-colors" aria-label="שתפו בוואטסאפ">
                {WA_SVG_LG}
                שתפו עם חברים
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
