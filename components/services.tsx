"use client"

import { motion } from "framer-motion"
import { Megaphone, Bot, Users, Calendar, Code } from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Marketing",
    description: "From strategy to execution, we help your brand stand out and get results.",
  },
  {
    icon: Bot,
    title: "AI Lead Generation",
    description: "Leverage AI to generate quality leads that convert, saving time and resources.",
  },
  {
    icon: Users,
    title: "CRM Integration",
    description: "Streamline your business by connecting and managing customer relationships efficiently.",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Simplify scheduling and never miss an opportunity to meet with clients.",
  },
  {
    icon: Code,
    title: "Web Dev/Design",
    description: "Create stunning, conversion-focused websites that captivate your audience and drive business growth.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
              <service.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
