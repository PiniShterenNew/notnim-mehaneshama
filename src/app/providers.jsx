'use client'

import { FundraiserProvider } from '../context/FundraiserContext'

export default function Providers({ children }) {
  return <FundraiserProvider>{children}</FundraiserProvider>
}
