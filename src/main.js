// ═══════════════════════════════════════════════════
// DONATION URL CONFIGURATION
// Update this single value to change all donation CTAs.
// ═══════════════════════════════════════════════════
const DONATION_URL = 'https://meshulam.co.il/quick_payment?b=d3ad476e504e90ec2b464f7536101942';

// Inject DONATION_URL into every donate link
document.querySelectorAll('.donate-link').forEach(el => {
  el.setAttribute('href', DONATION_URL);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener noreferrer');
});

// ── Optional: outbound click tracking ──────────────
document.querySelectorAll('.donate-link').forEach(el => {
  el.addEventListener('click', () => {
    const location = el.dataset.track || 'unknown';
    // Uncomment to enable analytics:
    // if (typeof gtag !== 'undefined') gtag('event', 'donate_click', { event_category: 'CTA', event_label: location });
    // if (typeof fbq  !== 'undefined') fbq('track', 'InitiateCheckout', { content_name: location });
  });
});

// ── Mobile Navigation Toggle ────────────────────────
const navBtn  = document.getElementById('nav-menu-btn');
const navMenu = document.getElementById('nav-menu');

navBtn?.addEventListener('click', () => {
  const isOpen = !navMenu.classList.contains('hidden');
  navMenu.classList.toggle('hidden', isOpen);
  navBtn.setAttribute('aria-expanded', String(!isOpen));
  navBtn.querySelector('.material-symbols-outlined').textContent = isOpen ? 'menu' : 'close';
});

navMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
    navBtn.setAttribute('aria-expanded', 'false');
    navBtn.querySelector('.material-symbols-outlined').textContent = 'menu';
  });
});

// ── Sticky Mobile CTA — appears after hero scrolls past ──
const stickyCTA   = document.getElementById('mobile-sticky');
const heroSection = document.getElementById('hero');

if (stickyCTA && heroSection && window.matchMedia('(max-width: 767px)').matches) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      stickyCTA.classList.toggle('visible', !entry.isIntersecting);
    },
    { threshold: 0 }
  );
  observer.observe(heroSection);
}

// ── WhatsApp share button ────────────────────────────
const waShareText = encodeURIComponent(
  'נותנים מהנשמה — לא משאירים ילד רעב\n' +
  'תרמו עכשיו ועזרו לנו לדאוג שאף ילד לא יישאר רעב: ' + DONATION_URL
);
const waShareURL = 'https://wa.me/?text=' + waShareText;

const waBtn = document.getElementById('whatsapp-share');
if (waBtn) waBtn.setAttribute('href', waShareURL);

const waFooterBtn = document.getElementById('footer-whatsapp');
if (waFooterBtn) waFooterBtn.setAttribute('href', waShareURL);

// ── Scroll-reveal (section content fades up on viewport enter) ──
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObs = new IntersectionObserver(
    entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add('in-view');
          revealObs.unobserve(target);
        }
      });
    },
    { threshold: 0.07, rootMargin: '0px 0px -32px 0px' }
  );

  document.querySelectorAll('section:not(#intro):not(#hero) h2').forEach(el => {
    el.classList.add('reveal');
    revealObs.observe(el);
  });

  document.querySelectorAll(
    '#who-we-help .grid > div, #donate .grid > div, ' +
    '#gallery .grid > div, ' +
    '#whatsapp-testimonials .grid > figure, ' +
    '#faq .space-y-3 > details'
  ).forEach(el => {
    const idx = Array.from(el.parentElement.children).indexOf(el);
    el.classList.add('reveal');
    el.style.transitionDelay = (idx * 0.09) + 's';
    revealObs.observe(el);
  });

  document.querySelectorAll('section:not(#intro):not(#hero) > div:last-child').forEach(el => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      revealObs.observe(el);
    }
  });
}
