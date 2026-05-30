'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const DarkModeContext = createContext({ isDark: false, toggleDarkMode: () => {} })

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const dark = localStorage.getItem('darkMode') === 'true'
    setIsDark(dark)
    if (dark) document.documentElement.classList.add('dark')
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('darkMode', String(!isDark))
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext)