import Link from 'next/link'

export default function Menu() {
  const categories = [
    { label: "Women's Clothing", href: 'products/womens-clothing' },
    { label: "Men's Clothing", href: 'products/mens-clothing' },
    { label: 'Jewelery', href: 'products/jewelery' },
    { label: 'Electronics', href: 'products/electronics' },
    { label: 'All Products', href: 'products/all' },
    { label: 'Contact Us', href: 'contact' },
  ]

  return (
    <ul
      id="menu"
      className="
          fixed top-0 right-0 left-0 bottom-0 z-30 dark:bg-brand-black bg-brand-white flex-col
          flex justify-center h-screen origin-top
          opacity-0 pointer-events-none w-full"
    >
      {categories.map((item) => (
        <li
          key={item.label}
          className="py-5 w-full border-brand-purple border-y  first:border-t-2 last:border-b-2 font-primary hover:bg-brand-purple hover:text-brand-white dark:hover:text-brand-black text-center
          lg:py-7"
        >
          <Link
            href={item.href}
            className="font-text text-base text-brand-purple hover:text-brand-white dark:hover:text-brand-black hover:font-bold uppercase
            lg:text-xl"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
