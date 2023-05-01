import DynamicTitle from '@/components/DynamicTitle'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-small bg-cover bg-center h-screen sm:bg-medium 2xl:bg-big">
      <div className="h-screen w-screen bg-brand-purple bg-opacity-25 flex flex-col justify-around items-center">
        <DynamicTitle />
        <span
          className="font-title text-brand-purple text-xl uppercase bg-brand-black w-fit px-4 py-2 bg-opacity-80 rounded-2xl animate-shake cursor-pointer
        md:text-3xl"
        >
          <Link href={'/products/all'}>See our products {'>>>'}</Link>
        </span>
      </div>
    </div>
  )
}
