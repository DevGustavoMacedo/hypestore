import Link from 'next/link'

export default function Header() {
  return (
    <div className="text-center text-brand-black py-2 text-xl font-title bg-brand-purple">
      <Link href={'/'}>Hype Store</Link>
    </div>
  )
}
