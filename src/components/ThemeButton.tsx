'use client'

import { useTheme } from '@/hooks/useTheme'
import Image from 'next/image'

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Image
      src={theme === 'light' ? '/off.svg' : '/on.svg'}
      alt="Change Theme"
      width={50}
      height={50}
      onClick={handleTheme}
      className="w-6 h-auto lg:w-8"
    />
  )
}
