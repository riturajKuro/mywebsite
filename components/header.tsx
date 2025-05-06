"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.03,
      filter: "brightness(1.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const navItemVariants = {
    initial: { y: 0, color: "rgb(209, 213, 219)" },
    hover: {
      y: -2,
      color: "rgb(255, 255, 255)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  const underlineVariants = {
    initial: { width: 0, opacity: 0 },
    hover: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const navItems = [
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "challenges", label: "Challenges" },
    { id: "unique-features", label: "Features" },
    { id: "faq", label: "FAQ" },
    { id: "cta", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex flex-col items-center transition-opacity"
            initial="initial"
            whileHover="hover"
            variants={logoVariants}
          >
            <div className="relative h-16 md:h-24 w-64 md:w-96">
              <Image
                src="/images/clickmorph-logo.png"
                alt="ClickMorph - Marketing & AI Automation"
                fill
                priority
                className="object-contain"
              />
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative py-2"
                initial="initial"
                whileHover="hover"
              >
                <motion.span variants={navItemVariants}>{item.label}</motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-[#ff4d4d] to-purple-500"
                  initial={{ width: 0, opacity: 0 }}
                  variants={underlineVariants}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-black/95 backdrop-blur-md shadow-lg z-50 md:hidden"
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="py-3 px-4 text-left text-lg font-medium text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} ClickMorph</p>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
