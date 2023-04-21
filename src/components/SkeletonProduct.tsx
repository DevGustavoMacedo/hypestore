export default function SkeletonProduct() {
  return (
    <div className="bg-brand-black">
      <div className="grid grid-cols-3 items-center">
        <span className="justify-self-center h-6 w-6 rounded-full bg-purple-300 animate-pulse" />
        <h2 className="font-text text-brand-purple text-2xl uppercase bg-brand-black w-fit py-4 mx-auto">
          Loading...
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <div className="flex w-4/5 flex-1 flex-col items-center mx-auto top-0 sticky">
          <div className="w-full animate-pulse space-x-1 rounded-xl bg-brand-purple rounded-s-none p-2">
            <div className="flex flex-col gap-4">
              <div className="h-80 w-full rounded-md bg-purple-300" />
              <div className="h-10 w-full rounded-md bg-purple-300" />
              <div className="h-24 w-full rounded-md bg-purple-300" />
              <div className="h-5 rounded-md bg-purple-300 w-1/2" />
              <div className="flex w-full gap-4">
                <div className="h-8 w-1/5 rounded-md bg-purple-300 " />
                <div className="h-8 w-1/4 rounded-md bg-purple-300 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
