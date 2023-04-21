'use client'

import TypeIt from 'typeit-react'

export default function Title() {
  return (
    <h1 className="font-title text-brand-purple text-5xl bg-brand-black w-fit px-4 py-2 bg-opacity-80 rounded-md">
      <TypeIt
        options={{
          speed: 300,
          waitUntilVisible: true,
        }}
        getBeforeInit={(instance) => {
          instance.type('Hype $').pause(300).delete(1).pause(300).type('Store')

          return instance
        }}
      />
    </h1>
  )
}
