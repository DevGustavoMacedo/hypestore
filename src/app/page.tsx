import Title from '@/components/Title'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-mobile bg-cover bg-center h-screen">
      <div className="h-screen w-screen bg-brand-purple bg-opacity-25 flex flex-col justify-around items-center">
        <Title />
        <span className="font-title text-brand-pink text-xl uppercase bg-brand-black w-fit px-4 py-2 bg-opacity-80 rounded-2xl animate-shake cursor-pointer">
          <Link href={'/products'}>Click and buy {'>>>'}</Link>
        </span>
      </div>
    </div>
  )
}
