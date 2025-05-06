"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black/80 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="relative h-20 w-64">
              <Image
                src="/images/clickmorph-logo.png"
                alt="ClickMorph - Marketing & AI Automation"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Automate what matters and focus on scaling up your business with ClickMorph's AI-powered marketing
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#challenges" className="text-gray-400 hover:text-white transition-colors">
                  Challenges
                </Link>
              </li>
              <li>
                <Link href="#unique-features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#cta" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <strong className="text-white">Phone:</strong> +91 9163283613
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong> rituraj.kuro@gmail.com
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Hours:</strong> 24x7
              </li>
            </ul>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center py-4">
          <motion.button
            onClick={scrollToTop}
            className="bg-black/50 border border-purple-500/30 rounded-full p-2 text-purple-500 hover:bg-purple-500/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">© {currentYear} ClickMorph. All rights reserved.</div>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
