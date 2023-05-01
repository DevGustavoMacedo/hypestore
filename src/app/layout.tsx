import '@/app/globals.css'

import { ReactNode } from 'react'

import {
  Josefin_Sans as josefinSans,
  Changa_One as changaOne,
} from 'next/font/google'

const josefin = josefinSans({
  variable: '--font-josefin',
  display: 'swap',
  weight: ['200', '400', '700'],
  subsets: ['latin'],
})

const changa = changaOne({
  variable: '--font-changa',
  display: 'swap',
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Hype Store',
  description: 'Hype products store',
  icons: '/favicon.svg',
  openGraph: {
    images:
      'https://raw.githubusercontent.com/DevGustavoMacedo/devgustavomacedo/main/public/dunder-mifflin.webp',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${changa.variable} scroll-smooth dark:selection:bg-brand-black selection:bg-brand-white selection:text-brand-purple bg-brand-white dark:bg-brand-black`}
      >
        {children}
      </body>
    </html>
  )
}
