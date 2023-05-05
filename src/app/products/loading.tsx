'use client'

import { SkeletonAllProducts, SkeletonOneProduct } from '@/components/Skeletons'

import { usePathname } from 'next/navigation'

export default function Loading() {
  const path = usePathname().split('/')

  return (
    <>
      {path.length === 3 && <SkeletonAllProducts />}
      {path.length === 4 && <SkeletonOneProduct />}
    </>
  )
}
