import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex items-center justify-center text-gray-200 py-4 text-xs font-text mt-14">
      Developed by
      <Link
        href={'https://github.com/DevGustavoMacedo'}
        target="_blank"
        className="text-brand-purple ml-1 font-bold"
      >
        @GustavoMacedo
      </Link>
    </div>
  )
}
