"use client"

import { motion } from "framer-motion"
import { Shield, Target, MapPin, Briefcase } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "GUARANTEE",
    description:
      "We only win if you win. That's the basis for a good partnership. You won't carry all the risk, we'll share it.",
  },
  {
    icon: Target,
    title: "RESULT",
    description: "Our first priority is to get you results. Less talk, more walk.",
  },
  {
    icon: MapPin,
    title: "LOCAL",
    description:
      "We are not tucked away in some anonymous call center. We're a local company, so you'll be able to reach us when you need us.",
  },
  {
    icon: Briefcase,
    title: "SPECIALIZATION",
    description:
      "Jack of all trades... Master of none. Specialization works. That's why we work with industries we know, so we can guarantee results.",
  },
]

export default function UniqueFeatures() {
  return (
    <section id="unique-features" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">OK... But What Makes You Different?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/50 border border-purple-500/10 rounded-lg p-6 hover:border-purple-500/30 
                         transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10
                         grid-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
