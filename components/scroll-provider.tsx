"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface ScrollContextType {
  scrollY: number
  scrollYProgress: number
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollYProgress: 0,
})

export const useScroll = () => useContext(ScrollContext)

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollYProgress, setScrollYProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Calculate scroll progress (0 to 1)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollYProgress(docHeight > 0 ? window.scrollY / docHeight : 0)
    }

    // Initial values
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <ScrollContext.Provider value={{ scrollY, scrollYProgress }}>{children}</ScrollContext.Provider>
}
