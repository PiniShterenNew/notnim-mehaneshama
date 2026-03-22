import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'

import HomePage    from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import TermsPage   from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import AccessibilityPage from './pages/AccessibilityPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/"              element={<HomePage />} />
      <Route path="/contact"       element={<ContactPage />} />
      <Route path="/terms"         element={<TermsPage />} />
      <Route path="/privacy"       element={<PrivacyPage />} />
      <Route path="/accessibility" element={<AccessibilityPage />} />
    </Routes>
  </BrowserRouter>
)
