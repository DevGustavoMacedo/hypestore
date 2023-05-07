import Link from 'next/link'
import { MenuButton, ThemeButton } from './Buttons'
import Menu from './Menu'

export default function Header() {
  return (
    <>
      <Menu />
      <div
        className="flex items-center justify-between text-brand-white dark:text-brand-black py-2 px-4 text-xl font-title bg-brand-purple
      md:text-2xl lg:text-3xl"
      >
        <ThemeButton />
        <Link href={'/'}>Hype Store</Link>
        <MenuButton />
      </div>
    </>
  )
}
