import TProduct from '@/types/TProduct'
import Image from 'next/image'

export default async function ProductCard({ id }: { id: number }) {
  const product: TProduct = await fetch(
    `https://fakestoreapi.com/products/${id}`,
  ).then((res) => res.json())

  const stars = []

  for (let i = 0; i < Math.round(product.rating.rate); i++) {
    stars.push(0)
  }

  return (
    <div
      className="mx-auto w-4/5 rounded-xl rounded-s-none p-2 bg-brand-purple
    sm:w-1/2 lg:flex lg:w-4/5 lg:gap-2
    "
    >
      <Image
        src={product.image}
        height={600}
        width={300}
        alt={product.title}
        priority={true}
        className="rounded h-auto w-full object-cover
        lg:w-1/2"
      />
      <div
        className="flex flex-col p-4 gap-4 dark:text-brand-white text-brand-black bg-brand-white dark:bg-brand-black font-text
      lg:p-8 lg:gap-8"
      >
        <h3
          className="font-text font-bold text-lg text-brand-purple text-center
        lg:text-2xl"
        >
          {product.title}
        </h3>
        <p
          className="border-brand-purple border-2 text-sm rounded border-dashed py-2 px-3 text-justify h-28 overflow-x-auto
        sm:text-base lg:text-xl lg:p-4 lg:h-48
        "
        >
          {product.description}
        </p>
        <p
          className="text-xs 
        sm:text-sm lg:text-lg"
        >
          <span className="text-brand-purple font-bold">Category: </span>{' '}
          {product.category}
        </p>
        <p className="flex justify-between items-center">
          <span className="flex">
            {stars.map((_, index) => (
              <Image
                key={index}
                width={40}
                height={40}
                alt=""
                src="/star.svg"
                className="fill-brand-purple w-4 h-auto
                lg:w-8"
              />
            ))}
            <span
              className="text-xs 
            sm:text-sm lg:text-lg"
            >
              {product.rating.count}
            </span>
          </span>
          <span
            className="dark:text-brand-white text-brand-black font-title text-2xl
          lg:text-4xl 2xl:text-5xl"
          >
            <span className="text-brand-purple">U$ </span> {product.price}
          </span>
        </p>
      </div>
    </div>
  )
}
