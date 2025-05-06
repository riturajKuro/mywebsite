"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll } from "framer-motion"

interface TimelineItem {
  title: string
  content?: React.ReactNode
}

interface TimelineProps {
  data: TimelineItem[]
  className?: string
}

export const Timeline = ({ data, className = "" }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // Calculate which section is currently in view
      const scrollPercentage = scrollPosition / (docHeight - windowHeight)
      const newActiveIndex = Math.min(Math.floor(scrollPercentage * data.length), data.length - 1)

      setActiveIndex(newActiveIndex)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [data.length])

  const { scrollYProgress } = useScroll()

  return (
    <div
      ref={containerRef}
      className={`fixed left-0 top-0 h-full w-[60px] md:w-[100px] z-10 pointer-events-none ${className}`}
    >
      <div
        className={`absolute left-9 md:left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent opacity-30`}
      />

      <motion.div
        className="absolute left-9 md:left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-purple-500 via-[#ff4d4d] to-[#22D3EE] origin-top"
        style={{ scaleY: scrollYProgress }}
      />

      <div className="relative w-full h-full py-10">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="absolute left-0 flex items-center"
            style={{
              top: `${(idx + 0.5) * (100 / data.length)}%`,
              opacity: activeIndex === idx ? 1 : 0.4,
              transition: "opacity 0.5s ease",
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  activeIndex === idx ? "border-purple-500" : "border-neutral-800"
                } bg-black z-10 transition-colors duration-300`}
              />
              <h3
                className={`text-sm md:text-lg font-bold ${
                  activeIndex === idx ? "text-white" : "text-gray-400"
                } transition-colors duration-300 whitespace-nowrap`}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
