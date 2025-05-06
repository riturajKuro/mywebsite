"use client"
import { useRef, useEffect, useState } from "react"
import { useMousePosition } from "@/hooks/use-mouse-position"

interface SparklesProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
  className?: string
  particleType?: "circle" | "square" | "line"
}

export const SparklesCore = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  speed = 1,
  particleColor = "#FFFFFF",
  particleDensity = 100,
  className = "",
  particleType = "circle",
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useMousePosition()
  const [particles, setParticles] = useState<
    Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }>
  >([])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === canvas) {
          canvas.width = entry.contentRect.width
          canvas.height = entry.contentRect.height
          if (!isInitialized) {
            initParticles(canvas.width, canvas.height)
            setIsInitialized(true)
          }
        }
      }
    })

    resizeObserver.observe(canvas)

    const initParticles = (width: number, height: number) => {
      const newParticles = []
      for (let i = 0; i < particleDensity; i++) {
        newParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
        })
      }
      setParticles(newParticles)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [isInitialized, maxSize, minSize, particleDensity, speed])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || particles.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Update particle position
        particles[i].x += particles[i].speedX
        particles[i].y += particles[i].speedY

        // Bounce off edges
        if (particles[i].x > canvas.width || particles[i].x < 0) {
          particles[i].speedX *= -1
        }
        if (particles[i].y > canvas.height || particles[i].y < 0) {
          particles[i].speedY *= -1
        }

        // Mouse interaction - particles move away from mouse
        if (mousePosition.x !== null && mousePosition.y !== null) {
          const dx = particles[i].x - mousePosition.x
          const dy = particles[i].y - mousePosition.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 100

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            particles[i].x += dx * force * 0.02
            particles[i].y += dy * force * 0.02
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.fillStyle = particleColor

        if (particleType === "circle") {
          ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2)
          ctx.fill()
        } else if (particleType === "square") {
          ctx.fillRect(
            particles[i].x - particles[i].size / 2,
            particles[i].y - particles[i].size / 2,
            particles[i].size,
            particles[i].size,
          )
        } else if (particleType === "line") {
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[i].x + particles[i].size * 2, particles[i].y + particles[i].size * 2)
          ctx.strokeStyle = particleColor
          ctx.stroke()
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [particles, background, particleColor, particleType, mousePosition])

  return <canvas ref={canvasRef} id={id} className={className} />
}
