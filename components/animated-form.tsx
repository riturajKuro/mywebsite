"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { RainbowButton } from "@/components/ui/rainbow-button"

export default function AnimatedForm() {
  const [displayedTitle, setDisplayedTitle] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const title = "Receive A Free Demo Prototype:"

  useEffect(() => {
    let currentIndex = 0
    const typeTitle = () => {
      if (currentIndex < title.length) {
        setDisplayedTitle(title.slice(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeTitle, 70)
      } else {
        setShowForm(true)
      }
    }
    typeTitle()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    // Reset form
    e.currentTarget.reset()
  }

  return (
    <section id="cta" className="py-20 px-6 bg-black relative">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="stars absolute inset-0" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono text-center mb-8">
          {displayedTitle}
          <span className="animate-blink">|</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showForm ? 1 : 0, y: showForm ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <p className="text-xl text-gray-300">Would you like to know what we can do for you?</p>
            <p className="text-gray-400">
              Fill out the form below and we will contact you within 48 hours for a free analysis.
            </p>
            <p className="font-mono text-gray-400">No costs, no obligations, no annoying sales pitch. Guaranteed.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block font-mono text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-sm text-gray-400">Business Model</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block font-mono text-sm text-gray-400">Company Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-sm text-gray-400">E-mail</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block font-mono text-sm text-gray-400">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-sm text-gray-400">What is your most important question?</label>
              <textarea
                required
                rows={3}
                className="w-full bg-transparent border-b border-gray-700 py-2 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>

            <div className="pt-8 text-center">
              <RainbowButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "SENDING..." : "SEND"}
              </RainbowButton>
            </div>
          </form>
        </motion.div>
      </div>
      <style jsx>{`
      .stars {
        background-image: 
          radial-gradient(1px 1px at 20px 30px, #8B5CF6, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 40px 70px, #ff4d4d, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 50px 160px, #22D3EE, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 90px 40px, #8B5CF6, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 130px 80px, #ff4d4d, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 160px 120px, #22D3EE, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 200px 90px, #8B5CF6, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 230px 130px, #ff4d4d, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 250px 250px;
        animation: twinkle 10s ease-in-out infinite;
        opacity: 0.2;
      }

      @keyframes twinkle {
        0% { opacity: 0.2; }
        50% { opacity: 0.3; }
        100% { opacity: 0.2; }
      }
    `}</style>
    </section>
  )
}
