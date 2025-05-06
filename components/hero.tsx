"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [text3, setText3] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [showBrush, setShowBrush] = useState(false)

  useEffect(() => {
    const line1 = "Automate."
    const line2 = "Scale."
    const line3 = "Grow."

    const typeText = async (text: string, setText: (text: string) => void) => {
      for (let i = 0; i <= text.length; i++) {
        setText(text.slice(0, i))
        await new Promise((resolve) => setTimeout(resolve, 70))
      }
    }

    const startTyping = async () => {
      await typeText(line1, setText1)
      await new Promise((resolve) => setTimeout(resolve, 400))
      await typeText(line2, setText2)
      await new Promise((resolve) => setTimeout(resolve, 400))
      await typeText(line3, setText3)
      await new Promise((resolve) => setTimeout(resolve, 300))
      setShowBrush(true)
    }

    startTyping()

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  const brushVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    },
  }

  const codeSnippet = `function generateLeads() {
  const ai = new ClickMorph.AI();
  const leads = await ai.analyze(
    market, 
    targetAudience
  );
  return leads.filter(
    lead => lead.score > 0.8
  );
}`

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="heroSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#8B5CF6"
          speed={1.2}
        />
        <div className="absolute inset-0 w-full h-full bg-black/70 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 md:mb-12 font-mono">
          <div className="mb-4 h-[1.2em]">
            {text1}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </div>
          <div className="mb-4 h-[1.2em]">
            {text2}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </div>
          <div className="text-purple-500 relative inline-block">
            {text3}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
            <svg className="absolute -bottom-3 left-0 w-full h-4" viewBox="0 0 300 20" preserveAspectRatio="none">
              <motion.path
                d="M8,16 C80,10 220,14 292,10"
                fill="none"
                stroke="#ff4d4d"
                strokeWidth="3"
                strokeLinecap="round"
                variants={brushVariants}
                initial="hidden"
                animate={showBrush ? "visible" : "hidden"}
              />
            </svg>
          </div>
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-100">Marketing is vital...</p>
        <p className="text-lg md:text-xl mb-8 md:mb-12 text-gray-300">
          ...However, there are already 101 things on your to-do list. And they are all important!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <Button variant="gradient" size="xl" onClick={() => scrollToSection("cta")} className="relative z-10">
            <span className="relative z-10 px-2">YES, I WANT THAT!</span>
          </Button>

          <div className="code-block text-left text-xs md:text-sm max-w-xs md:max-w-md overflow-hidden">
            <pre className="text-gray-300">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <span className="px-2 py-1 bg-black/50 rounded-full border border-gray-800">AI-Powered</span>
          <span className="px-2 py-1 bg-black/50 rounded-full border border-gray-800">Data-Driven</span>
          <span className="px-2 py-1 bg-black/50 rounded-full border border-gray-800">Automation</span>
          <span className="px-2 py-1 bg-black/50 rounded-full border border-gray-800">Lead Generation</span>
          <span className="px-2 py-1 bg-black/50 rounded-full border border-gray-800">Conversion Optimization</span>
        </div>
      </div>
    </section>
  )
}
