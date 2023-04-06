import Footer from '@/components/Footer'
import ProductsGrid from '@/components/ProductsGrid'
import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  return (
    <section className="bg-brand-black">
      <div className="grid grid-cols-3 items-center">
        <Link href="/" className="justify-self-center" passHref>
          <Image width={50} height={50} alt="Go back" src="/back.svg" className="w-6 h-auto" />
        </Link>
        <h2 className="font-title text-brand-purple text-2xl uppercase bg-brand-black w-fit py-4 mx-auto">
          Products
        </h2>
      </div>
      <div className="mx-auto w-[90%] grid grid-cols-1 gap-8">
        {/* @ts-expect-error Async Server Component */}
        <ProductsGrid />
      </div>
      <Footer />
    </section>
  )
}
