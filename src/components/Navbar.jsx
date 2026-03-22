import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DONATION_URL } from '../config'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className="fixed top-0 w-full z-50 nav-glass" role="navigation" aria-label="ניווט ראשי">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" aria-label="נותנים מהנשמה - דף הבית" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/attachments/logo.png" alt="נותנים מהנשמה — לא משאירים ילד רעב" className="h-11 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors" href="/#stories">הסיפור שלנו</a>
            <a className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors" href="/#about">אודות</a>
            <a className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors" href="/#faq">שאלות נפוצות</a>
            <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-gradient px-7 py-2.5 text-sm">לתרומה עכשיו</a>
          </div>

          <button
            className="md:hidden p-2 text-primary rounded-lg hover:bg-surface-container-low transition-colors"
            aria-label={open ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="material-symbols-outlined" aria-hidden="true">{open ? 'close' : 'menu'}</span>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-surface/96 backdrop-blur-lg border-t border-outline-variant/15 px-6 py-5 space-y-3" role="menu">
            <a className="block text-on-surface-variant hover:text-primary py-2 font-semibold" href="/#stories" role="menuitem" onClick={() => setOpen(false)}>הסיפור שלנו</a>
            <a className="block text-on-surface-variant hover:text-primary py-2 font-semibold" href="/#about" role="menuitem" onClick={() => setOpen(false)}>אודות</a>
            <a className="block text-on-surface-variant hover:text-primary py-2 font-semibold" href="/#faq" role="menuitem" onClick={() => setOpen(false)}>שאלות נפוצות</a>
            <a href={DONATION_URL} target="_blank" rel="noopener noreferrer" className="block text-center btn-primary-gradient px-6 py-3" role="menuitem" onClick={() => setOpen(false)}>לתרומה עכשיו</a>
          </div>
        )}
      </nav>
    </header>
  )
}
