'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function GoBack() {
  const { back } = useRouter()

  return (
    <Image
      onClick={() => back()}
      width={50}
      height={50}
      alt="Go back"
      src="/back.svg"
      className="w-7 h-auto
      md:w-8 lg:w-10"
    />
  )
}
