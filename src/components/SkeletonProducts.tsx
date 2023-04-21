export default function SkeletonProducts() {
  const cards = []

  for (let i = 0; i < 20; i++) {
    cards.push(0)
  }

  return (
    <div className="bg-brand-black">
      <div className="grid grid-cols-3 items-center">
        <span className="justify-self-center h-6 w-6 rounded-full bg-purple-300 animate-pulse" />
        <h2 className="font-text text-brand-purple text-2xl uppercase bg-brand-black w-fit py-4 mx-auto">
          Loading...
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {cards.map((_, index) => (
          <div
            key={index}
            className="flex w-[90%] flex-1 flex-col items-center mx-auto top-0 sticky"
          >
            <div className="w-full animate-pulse space-x-1 rounded-xl bg-brand-purple p-2">
              <div className="flex flex-col">
                <div className="h-80 w-full rounded-md bg-purple-300" />
                <div className="flex flex-col rounded-t-none rounded-md bg-brand-black p-4 gap-4">
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
