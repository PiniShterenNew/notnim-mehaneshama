'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { DONATION_URL } from '../config'

const FundraiserContext = createContext({
  donationUrl: DONATION_URL,
  fundraiserName: null,
  loading: false,
})

// paymentUrl comes from a Google Sheet cell editors can type anything into —
// reject non-http(s) schemes (javascript:, data:, etc.) before ever using it as an href.
function isSafeHttpUrl(value) {
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:'
  } catch {
    return false
  }
}

export function FundraiserProvider({ children }) {
  const [fundraiser, setFundraiser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get('ref')
    if (!ref) return

    let cancelled = false
    setLoading(true)

    fetch(`/api/test-fundraiser?ref=${encodeURIComponent(ref)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled) return
        if (data?.ok && data.fundraiser?.paymentUrl && isSafeHttpUrl(data.fundraiser.paymentUrl)) {
          setFundraiser(data.fundraiser)
        }
      })
      // Network error, ref not found/inactive, or malformed response — silently
      // fall back to the generic DONATION_URL.
      .catch(() => {})
      .finally(() => { if (!cancelled) setLoading(false) })

    return () => { cancelled = true }
  }, [])

  const value = useMemo(() => ({
    donationUrl: fundraiser?.paymentUrl || DONATION_URL,
    fundraiserName: fundraiser?.name || null,
    loading,
  }), [fundraiser, loading])

  return <FundraiserContext.Provider value={value}>{children}</FundraiserContext.Provider>
}

export function useFundraiser() {
  return useContext(FundraiserContext)
}
