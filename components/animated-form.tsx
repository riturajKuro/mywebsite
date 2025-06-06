"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Terminal, Send, Sparkles } from "lucide-react"

export default function AnimatedForm() {
  const [mounted, setMounted] = useState(false)
  const [displayedTitle, setDisplayedTitle] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState("")
  const [businessModel, setBusinessModel] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [question, setQuestion] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const title = "Receive A Free Demo Prototype:"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

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
  }, [mounted])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        businessModel,
        companyName,
        email,
        phoneNumber,
        question,
      }),
    });

    setIsSubmitting(false);
    if (res.ok) {
      e.currentTarget.reset();
      setName("");
      setBusinessModel("");
      setCompanyName("");
      setEmail("");
      setPhoneNumber("");
      setQuestion("");
      setSuccessMessage("Thank you! Your submission has been received.");
    } else {
      alert('There was an error submitting the form.');
    }
  };

  return (
    <section id="cta" className="py-20 px-6 bg-black relative">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="stars absolute inset-0" />

        {/* Tech grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-full w-[1px] bg-purple-500/50 transform translate-x-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 gap-4 opacity-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-full h-[1px] bg-purple-500/50 transform translate-y-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="code-block mb-8 mx-auto max-w-lg">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <Terminal size={14} className="mr-2" />
            <span>clickmorph_demo.sh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono text-center mb-2 glow-text">
            {displayedTitle}
            <span className="animate-blink">|</span>
          </h2>
        </div>

        {/* Success message */}
        {successMessage && (
          <div className="mb-4 text-green-500 text-center font-mono">
            {successMessage}
          </div>
        )}

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
            <p className="font-mono text-gray-400 flex items-center justify-center gap-2">
              <Sparkles size={16} className="text-purple-500" />
              No costs, no obligations, no annoying sales pitch. Guaranteed.
              <Sparkles size={16} className="text-purple-500" />
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-purple-500/20"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block font-mono text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-sm text-gray-400">Business Model</label>
                <input
                  type="text"
                  required
                  value={businessModel}
                  onChange={e => setBusinessModel(e.target.value)}
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
                  value={companyName}
                  onChange={e => setCompanyName(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-sm text-gray-400">What is your most important question?</label>
              <textarea
                required
                rows={3}
                value={question}
                onChange={e => setQuestion(e.target.value)}
                className="w-full bg-transparent border-b border-gray-700 py-2 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>

            <div className="pt-8 text-center">
              <Button variant="gradient" size="xl" type="submit" disabled={isSubmitting} className="relative z-10">
                <span className="relative z-10 px-2 flex items-center gap-2">
                  {isSubmitting ? "SENDING..." : "SEND"}
                  <Send size={16} className={isSubmitting ? "animate-pulse" : ""} />
                </span>
              </Button>
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