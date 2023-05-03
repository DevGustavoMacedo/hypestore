import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/hooks/useTheme'

import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}
