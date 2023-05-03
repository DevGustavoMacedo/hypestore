export default function Loading() {
  return (
    <div className="bg-brand-white dark:bg-brand-black">
      <div className="grid grid-cols-3 items-center">
        <span className="justify-self-center h-7 w-7 rounded-full bg-purple-300 animate-pulse" />
        <h2
          className="font-text text-brand-purple text-xl uppercase dark:bg-brand-black bg-brand-white w-fit py-5 mx-auto
        md:text-2xl lg:text-3xl lg:py-7"
        >
          Loading...
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <div
          className="flex w-4/5 flex-1 flex-col items-center mx-auto top-0 sticky
        sm:w-1/2 lg:w-4/5"
        >
          <div className="w-full animate-pulse space-x-1 rounded-xl bg-brand-purple rounded-s-none p-4 lg:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
              <div className="h-80 w-full rounded-md bg-purple-300 lg:w-1/2" />
              <div className="flex flex-col gap-4 w-full">
                <div className="h-10 w-full rounded-md bg-purple-300 lg:h-16" />
                <div className="h-20 w-full rounded-md bg-purple-300 lg:h-32" />
                <div className="h-5 rounded-md bg-purple-300 w-1/2 lg:h-10" />
                <div className="flex w-full gap-4 justify-between">
                  <div className="h-8 w-1/5 rounded-md bg-purple-300 lg:h-16 lg:w-2/5" />
                  <div className="h-8 w-1/4 rounded-md bg-purple-300 lg:h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
