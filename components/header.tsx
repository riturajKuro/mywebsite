"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <motion.button
              onClick={() => scrollToSection("services")}
              className="relative py-2"
              initial="initial"
              whileHover="hover"
            >
              <motion.span variants={navItemVariants}>Services</motion.span>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-[#ff4d4d] to-purple-500"
                initial={{ width: 0, opacity: 0 }}
                variants={underlineVariants}
              />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("testimonials")}
              className="relative py-2"
              initial="initial"
              whileHover="hover"
            >
              <motion.span variants={navItemVariants}>Testimonials</motion.span>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-[#ff4d4d] to-purple-500"
                initial={{ width: 0, opacity: 0 }}
                variants={underlineVariants}
              />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("challenges")}
              className="relative py-2"
              initial="initial"
              whileHover="hover"
            >
              <motion.span variants={navItemVariants}>Challenges</motion.span>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-[#ff4d4d] to-purple-500"
                initial={{ width: 0, opacity: 0 }}
                variants={underlineVariants}
              />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("unique-features")}
              className="relative py-2"
              initial="initial"
              whileHover="hover"
            >
              <motion.span variants={navItemVariants}>Features</motion.span>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-[#ff4d4d] to-purple-500"
                initial={{ width: 0, opacity: 0 }}
                variants={underlineVariants}
              />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("faq")}
              className="relative py-2"
              initial="initial"
              whileHover="hover"
            >
              <motion.span variants={navItemVariants}>FAQ</motion.span>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-[#ff4d4d] to-purple-500"
                initial={{ width: 0, opacity: 0 }}
                variants={underlineVariants}
              />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("cta")}
              className="relative py-2"
              initial="initial"
              whileHover="hover"
            >
              <motion.span variants={navItemVariants}>Contact</motion.span>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-[#ff4d4d] to-purple-500"
                initial={{ width: 0, opacity: 0 }}
                variants={underlineVariants}
              />
            </motion.button>
          </div>
        </nav>
      </div>
    </header>
  )
}
