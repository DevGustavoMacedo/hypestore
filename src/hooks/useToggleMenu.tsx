'use client'

import { useEffect, useState } from 'react'

export function useToogleMenu() {
  const [isToggleMenu, setToggleMenu] = useState<boolean>(false)

  const handleToggleMenu = () => setToggleMenu((prevState) => !prevState)

  useEffect(() => {
    document.body.style.overflowY = isToggleMenu ? 'hidden' : 'auto'
  }, [isToggleMenu])

  return { handleToggleMenu, isToggleMenu }
}
