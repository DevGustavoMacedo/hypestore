import Image from 'next/image'
import Link from 'next/link'
import MenuButton from './MenuButton'

export default function Header() {
  return (
    <header className="bg-brand-blue p-2 flex items-center justify-between z-10">
      <Image
        src="/icons/logo.webp"
        width={847}
        height={506}
        alt="Dunder Mifflin Logo"
        className="h-16 sm:h-20 w-auto 3xl:h-32"
      />

      <ul
        id="menu"
        className="
          absolute top-0 right-0 left-0 bottom-0 z-30 bg-brand-blue flex-col
          flex justify-center h-screen origin-top
          opacity-0 pointer-events-none sm:pointer-events-auto
          sm:flex-row sm:h-auto sm:relative sm:justify-around sm:opacity-100
          items-center w-full 3xl:p-7 3xl:text-3xl"
      >
        <li>
          <Link
            href="/"
            className="
          border-2 border-slate-900 py-7 w-full first:border-t-4 last:border-b-4
          sm:p-4 sm:border-none text-brand-white font-primary sm:rounded-2xl hover:bg-brand-darkblue"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="
          border-2 border-slate-900 py-7 w-full first:border-t-4 last:border-b-4
          sm:p-4 sm:border-none text-brand-white font-primary sm:rounded-2xl hover:bg-brand-darkblue"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="/team"
            className="
          border-2 border-slate-900 py-7 w-full first:border-t-4 last:border-b-4
          sm:p-4 sm:border-none text-brand-white font-primary sm:rounded-2xl hover:bg-brand-darkblue"
          >
            ★TEAM★
          </Link>
        </li>
        <li>
          <Link
            href="/podcast"
            className="
          border-2 border-slate-900 py-7 w-full first:border-t-4 last:border-b-4
          sm:p-4 sm:border-none text-brand-white font-primary sm:rounded-2xl hover:bg-brand-darkblue"
          >
            Podcast
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="
          border-2 border-slate-900 py-7 w-full first:border-t-4 last:border-b-4
          sm:p-4 sm:border-none text-brand-white font-primary sm:rounded-2xl hover:bg-brand-darkblue"
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <MenuButton />
    </header>
  )
}
