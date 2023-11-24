import TProduct from '@/types/TProduct'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProductsGrid({ href }: { href: string }) {
  const products = await fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data: TProduct[]) => {
      if (href === 'all') {
        return data
      } else {
        return data.filter(
          (product) =>
            product.category.replace("'", '') === href.replace('-', ' '),
        )
      }
    })

  return (
    <div
      className="mx-auto w-[90%] grid grid-cols-1 gap-8
        sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
         "
    >
      {products.map((product: TProduct, index: number) => (
        <div
          key={product.id}
          className="p-1 bg-brand-purple rounded-xl rounded-s-none top-0 sticky"
        >
          <div className="w-full h-full rounded-xl rounded-s-none bg-brand-white dark:bg-brand-black">
            <Image
              src={product.image}
              height={600}
              width={300}
              alt={product.title}
              priority={index === 0}
              className="rounded-xl rounded-s-none h-80 w-full object-cover object-top"
            />
            <div className="w-full flex justify-between items-center p-4">
              <h3
                className="font-text text-brand-purple font-bold text-sm max-w-[80%] whitespace-nowrap overflow-x-hidden text-ellipsis
              md:text-base lg:text-lg"
              >
                {product.title}
              </h3>
              <Link href={`${href}/${product.id}`} passHref>
                <Image
                  src={'/buy.svg'}
                  alt="More info"
                  width={40}
                  height={40}
                  className="cursor-pointer h-8 w-auto animate-pulse lg:h-10"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
