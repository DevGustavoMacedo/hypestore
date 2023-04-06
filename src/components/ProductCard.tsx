import TProduct from '@/types/Product'
import Image from 'next/image'

export default async function ProductCard({ id }: { id: number }) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const product: TProduct = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  )

  const stars = []

  for (let i = 0; i < Math.round(product.rating.rate); i++) {
    stars.push(0)
  }

  return (
    <div className="mx-auto w-[90%] rounded-md p-2 bg-brand-purple">
      <Image
        src={product.image}
        height={600}
        width={300}
        alt={product.title}
        priority={true}
        className="rounded h-auto w-full object-cover"
      />
      <div className="flex flex-col p-4 gap-4 text-gray-200 bg-brand-black font-text">
        <h3 className="font-title text-lg text-brand-purple">{product.title}</h3>
        <p className="border-brand-purple border-2 text-sm rounded border-dashed py-2 px-3 text-justify h-28 overflow-x-auto">
          {product.description}
        </p>
        <p className="text-xs">Category: {product.category}</p>
        <p className="flex justify-between items-center">
          <span className="flex">
            {stars.map((_) => (
              <Image
                width={40}
                height={40}
                alt=""
                src="/star.svg"
                className="fill-brand-purple w-4 h-auto"
              />
            ))}
            <span className="text-xs">{product.rating.count}</span>
          </span>
          <span className="text-brand-purple font-title text-2xl">U$ {product.price}</span>
        </p>
      </div>
    </div>
  )
}
