"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

export const RainbowButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <span
        className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${
          hovered
            ? "bg-[conic-gradient(from_90deg_at_50%_50%,#ff4d4d_0%,#8B5CF6_50%,#22D3EE_100%)]"
            : "bg-[conic-gradient(from_90deg_at_50%_50%,#ff4d4d_0%,#8B5CF6_50%,#22D3EE_100%)]"
        }`}
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-black px-6 py-2 text-sm font-medium text-[#ff4d4d] backdrop-blur-3xl">
        {children}
      </span>
    </button>
  )
}
