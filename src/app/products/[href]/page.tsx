import GoBack from '@/components/GoBack'
import ProductsGrid from '@/components/ProductsGrid'

export async function generateStaticParams() {
  const categories = await fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((data) => {
      data.push('all')
      return data.map((item: string) => ({ href: item }))
    })

  return categories
}

type Props = {
  params: {
    href: string
  }
}

export default function Products({ params }: Props) {
  return (
    <section className="bg-brand-white dark:bg-brand-black">
      <div className="flex items-center justify-around">
        <GoBack />
        <h2
          className="font-title text-brand-purple text-xl uppercase bg-brand-white dark:bg-brand-black py-5
        md:text-2xl lg:text-3xl lg:py-7"
        >
          {JSON.stringify(params)}
        </h2>
        <div></div>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <ProductsGrid href={params.href} />
    </section>
  )
}
