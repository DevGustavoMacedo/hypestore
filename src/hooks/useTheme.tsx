'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'

type Props = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

const ThemeContext = createContext<Props>({
  theme: 'dark',
  setTheme: () => {},
})

export function useTheme() {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ?? 'dark')
  }, [])

  useEffect(() => {
    const root = document.documentElement

    if (theme) {
      root.classList.remove(theme === 'dark' ? 'light' : 'dark')
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
