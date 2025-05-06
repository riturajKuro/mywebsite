"use client"

import { motion } from "framer-motion"

export default function TrustBadges() {
  const badges = [
    { name: "Google Partner", icon: "G" },
    { name: "Meta Certified", icon: "M" },
    { name: "OpenAI Partner", icon: "AI" },
    { name: "HubSpot Elite", icon: "H" },
    { name: "AI Ethics Verified", icon: "✓" },
  ]

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-black/30 via-black/20 to-black/30 border-y border-purple-500/10">
      <div className="container mx-auto">
        <motion.h3
          className="text-center text-lg text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Powered By Leading AI & Marketing Technologies
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-5xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="min-h-[120px] min-w-[160px] flex flex-col items-center justify-center bg-black/60 border border-purple-500/40 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_16px_2px_rgba(139,92,246,0.4)] text-center select-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 32px 4px rgba(139,92,246,0.25)",
                borderColor: "#a78bfa",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">{badge.icon}</div>
              <div className="text-base text-gray-200 font-mono break-words leading-tight px-1">
                {badge.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
