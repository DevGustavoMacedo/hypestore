export function SkeletonAllProducts() {
  const cards = []

  for (let i = 0; i < 20; i++) {
    cards.push(0)
  }

  return (
    <div className="dark:bg-brand-black bg-brand-white">
      <div className="grid grid-cols-3 items-center">
        <span className="justify-self-center h-7 w-7 rounded-full bg-purple-300 animate-pulse lg:h-10 lg:w-10" />
        <h2
          className="font-text text-brand-purple text-xl uppercase dark:bg-brand-black bg-brand-white w-fit py-5 mx-auto
      md:text-2xl lg:text-3xl lg:py-7"
        >
          Loading...
        </h2>
      </div>
      <div
        className="grid grid-cols-1 gap-8 w-[90%] mx-auto
    sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {cards.map((_, index) => (
          <div
            key={index}
            className="flex w-full flex-1 flex-col items-center mx-auto top-0 sticky"
          >
            <div className="w-full animate-pulse space-x-1 rounded-xl bg-brand-purple p-2">
              <div className="flex flex-col">
                <div className="h-80 w-full rounded-md bg-purple-300" />
                <div className="flex flex-col rounded-t-none rounded-md bg-brand-white dark:bg-brand-black p-4 gap-4">
                  <div className="flex justify-between items-center gap-4">
                    <div className="h-12 w-11/12 rounded-md bg-purple-300 " />
                    <div className="h-10 w-10 rounded-md bg-purple-300 " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkeletonOneProduct() {
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
