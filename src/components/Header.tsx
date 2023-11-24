'use client'

import Link from 'next/link'
import { MenuButton, ThemeButton } from './Buttons'
import Menu from './Menu'

import { useToogleMenu } from '@/hooks/useToggleMenu'
import { useTheme } from '@/hooks/useTheme'

export default function Header() {
  const { handleToggleMenu: handleMenu, isToggleMenu: isMenu } = useToogleMenu()
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Menu isMenu={isMenu} handleMenu={handleMenu} />
      <div
        className="flex items-center justify-between text-brand-white dark:text-brand-black py-2 px-4 text-xl font-title bg-brand-purple
      md:text-2xl lg:text-3xl"
      >
        <ThemeButton theme={theme} setTheme={setTheme} />
        <Link href={'/'}>Hype Store</Link>
        <MenuButton isMenu={isMenu} handleMenu={handleMenu} />
      </div>
    </>
  )
}
