import { GoBackButton } from '@/components/GoBackButton'
import ProductCard from '@/components/ProductCard'
import TProduct from '@/types/TProduct'

export async function generateStaticParams() {
  const products: TProduct[] = await fetch(
    'https://fakestoreapi.com/products',
  ).then((res) => res.json())

  const idProducts = products.map((item) => item.id)

  return idProducts
}

type Props = {
  params: {
    category: string
  }
}

export default function Product({ params }: Props) {
  return (
    <section className="dark:bg-brand-black bg-brand-white">
      <div className="flex items-center justify-around">
        <GoBackButton />
        <h2
          className="font-title text-brand-purple text-xl uppercase dark:bg-brand-black bg-brand-white py-5
        md:text-2xl lg:text-3xl lg:py-7"
        >
          Product
        </h2>
        <div></div>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <ProductCard id={params.id} />
    </section>
  )
}
