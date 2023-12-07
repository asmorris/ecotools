'use client'

import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

export const useDarkMode = () => {
  const [darkMode, setDarkMode ] = useLocalStorage('colour-mode', true)

  useEffect(() => {
    const className = 'dark'
    const bodyClasses = window.document.body.classList
    
    bodyClasses.toggle(className)
  }, [darkMode])
  
  return [darkMode, setDarkMode]
}
