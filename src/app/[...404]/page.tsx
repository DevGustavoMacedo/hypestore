import Image from 'next/image'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center gap-4 bg-slate-300 min-h-screen h-full">
      <h2 className="font-title text-4xl text-brand-purple py-4 lg:text-6xl z-50">
        404
      </h2>
      <p className="font-text font-bold text-lg text-brand-purple lg:text-2xl">
        What the heck are you looking for?
      </p>
      <Image
        src="/travolta.gif"
        alt="John Travolta Confused"
        width={490}
        height={476}
        className="absolute bottom-0"
      />
    </div>
  )
}
