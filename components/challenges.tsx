"use client"

import { motion } from "framer-motion"
import { Clock, Users, Building } from "lucide-react"

const challenges = [
  {
    icon: Clock,
    title: "Do Everything Yourself?",
    description: "If you have time, it's possible... But not scalable.",
  },
  {
    icon: Users,
    title: "Hire New Staff?",
    description: "Costly, time-consuming, and unpredictable.",
  },
  {
    icon: Building,
    title: "Hire an Agency?",
    description: "Not all agencies prioritize your growth. Avoid the one-size-fits-all trap.",
  },
]

export default function Challenges() {
  return (
    <section id="challenges" className="py-20 px-6 bg-black/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          So, How Do You Get the Most Out of Your Marketing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
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
              <challenge.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
              <p className="text-gray-400">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
