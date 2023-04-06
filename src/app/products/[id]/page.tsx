import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import TParams from '@/types/Params'
import TProduct from '@/types/Product'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  const products: TProduct[] = await fetch('https://fakestoreapi.com/products').then((res) =>
    res.json()
  )

  const idProducts = products.filter((item) => item.id)

  return idProducts
}

export default function Product({ params }: TParams) {
  return (
    <section className="bg-brand-black">
      <div className="grid grid-cols-3 items-center">
        <Link href="/products" className="justify-self-center" passHref>
          <Image width={50} height={50} alt="Go back" src="/back.svg" className="w-6 h-auto" />
        </Link>
        <h2 className="font-title text-brand-purple text-2xl uppercase bg-brand-black w-fit py-4 mx-auto">
          Product
        </h2>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <ProductCard id={params.id} />
      <Footer />
    </section>
  )
}
