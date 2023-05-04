import Link from 'next/link'

export default function Footer() {
  return (
    <div
      className="text-center text-brand-black dark:text-brand-white py-4 text-xs font-text mt-14 dark:bg-brand-black bg-brand-white font-bold
    lg:text-lg"
    >
      Developed by
      <Link
        href={'https://github.com/DevGustavoMacedo'}
        target="_blank"
        className="text-brand-purple ml-1"
      >
        @GustavoMacedo
      </Link>
    </div>
  )
}
