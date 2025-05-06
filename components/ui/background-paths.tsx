"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export const BackgroundPaths = ({
  title,
  className,
}: {
  title?: string | React.ReactNode
  className?: string
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const currentRef = containerRef.current
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  // Generate paths
  const paths = [
    {
      d: `M100,${windowSize.height / 2} Q${mousePosition.x || windowSize.width / 2},${mousePosition.y || windowSize.height / 2} ${
        windowSize.width - 100
      },${windowSize.height / 2}`,
      stroke: "#8B5CF6",
      strokeWidth: 2,
      filter: "blur(4px)",
    },
    {
      d: `M${windowSize.width / 2},100 Q${mousePosition.x || windowSize.width / 2},${mousePosition.y || windowSize.height / 2} ${
        windowSize.width / 2
      },${windowSize.height - 100}`,
      stroke: "#ff4d4d",
      strokeWidth: 2,
      filter: "blur(3px)",
    },
    {
      d: `M100,${windowSize.height - 200} Q${mousePosition.x || windowSize.width / 2},${mousePosition.y || windowSize.height / 2} ${windowSize.width - 100},200`,
      stroke: "#22D3EE",
      strokeWidth: 1.5,
      filter: "blur(2px)",
    },
    {
      d: `M200,${windowSize.height - 100} Q${mousePosition.x || windowSize.width / 2},${mousePosition.y || windowSize.height / 2} ${windowSize.width - 200},100`,
      stroke: "#8B5CF6",
      strokeWidth: 1,
      filter: "blur(1px)",
    },
  ]

  return (
    <div ref={containerRef} className={`h-full w-full overflow-hidden absolute inset-0 ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${windowSize.width} ${windowSize.height}`}
        preserveAspectRatio="none"
        style={{ position: "absolute", zIndex: 0 }}
      >
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path.d}
            stroke={path.stroke}
            strokeWidth={path.strokeWidth}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              pathLength: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
              opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" },
            }}
            style={{ filter: path.filter }}
          />
        ))}
      </svg>
      {title && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
        </div>
      )}
    </div>
  )
}
