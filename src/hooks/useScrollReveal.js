import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // בסביבה עם reduced-motion — הצג הכל מיד ללא אנימציה
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'))
      return
    }

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add('in-view')
            obs.unobserve(target)
          }
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -32px 0px' }
    )

    // h2 בסקשנים (לא intro/hero)
    document.querySelectorAll('section:not(#intro):not(#hero) h2').forEach(el => {
      el.classList.add('reveal')
      obs.observe(el)
    })

    // כרטיסים, תמונות, FAQ
    document.querySelectorAll(
      '#who-we-help .grid > div, ' +
      '#gallery .grid > div, ' +
      '#whatsapp-testimonials .grid > figure, ' +
      '#faq .space-y-3 > details'
    ).forEach((el, idx) => {
      el.classList.add('reveal')
      el.style.transitionDelay = (idx * 0.09) + 's'
      obs.observe(el)
    })

    // div אחרון בכל סקשן שעוד לא קיבל reveal
    document.querySelectorAll('section:not(#intro):not(#hero) > div:last-child').forEach(el => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal')
        obs.observe(el)
      }
    })

    return () => obs.disconnect()
  }, [])
}
