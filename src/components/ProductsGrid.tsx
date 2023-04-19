import TProduct from '@/types/Product'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProductsGrid() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json(),
  )

  return (
    <>
      {products.map((product: TProduct) => (
        <div
          key={product.id}
          className="p-2 bg-brand-purple rounded-xl rounded-s-none top-0 sticky"
        >
          <div className="w-full rounded-xl rounded-s-none bg-brand-black">
            <Image
              src={product.image}
              height={600}
              width={300}
              alt={product.title}
              priority={product.id === 1}
              className="rounded-xl rounded-s-none h-80 w-full object-cover object-top"
            />
            <div className="w-full flex justify-between items-center p-4">
              <h3 className="font-text text-brand-purple font-bold text-sm max-w-[80%]">
                {product.title}
              </h3>
              <Link href={'/products/' + product.id} passHref>
                <Image
                  src={'/buy.svg'}
                  alt="More info"
                  width={40}
                  height={40}
                  className="cursor-pointer h-8 w-auto animate-pulse"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
