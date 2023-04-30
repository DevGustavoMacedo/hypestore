import GoBack from '@/components/GoBack'
import ProductsGrid from '@/components/ProductsGrid'
import TProduct from '@/types/TProduct'

export async function generateStaticParams() {
  const categories = await fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((data) => data.map((item: string) => ({ href: item })))

  return categories
}

type Props = {
  params: {
    href: string
  }
}

export default async function Category({ params }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const products = await fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data: TProduct[]) =>
      data.filter(
        (product) =>
          product.category.replace("'", '') === params.href.replace('-', ' '),
      ),
    )

  return (
    <section className="bg-brand-white dark:bg-brand-black">
      <div className="flex items-center justify-around">
        <GoBack />
        <h2 className="font-title text-brand-purple text-xl uppercase bg-brand-white dark:bg-brand-black py-5">
          {products[0].category}
        </h2>
        <div></div>
      </div>
      <div className="mx-auto w-[90%] grid grid-cols-1 gap-8">
        <ProductsGrid products={products} />
      </div>
    </section>
  )
}
