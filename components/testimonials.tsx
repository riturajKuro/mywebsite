"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface Testimonial {
  name: string
  position: string
  company: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    name: "Abhishek Naha",
    position: "CEO",
    company: "ADS Interior",
    content:
      "ClickMorph transformed our interior design firm's marketing approach completely. Their AI-driven lead generation increased our qualified leads by 137% in just three months. The team's expertise and responsiveness made the entire process seamless.",
  },
  {
    name: "Priya Sharma",
    position: "Marketing Director",
    company: "TechVision India",
    content:
      "As a growing tech company, I was skeptical about marketing agencies, but ClickMorph proved their value immediately. Their data-driven approach and transparent reporting gave us confidence, and the results speak for themselves—40% growth in customer acquisition.",
  },
  {
    name: "Rajesh Patel",
    position: "Founder",
    company: "Spice Route Exports",
    content:
      "The automation systems ClickMorph implemented saved our export business countless hours while improving our conversion rates. Their understanding of our industry challenges and personalized solutions made all the difference.",
  },
  {
    name: "Ananya Desai",
    position: "E-commerce Director",
    company: "Ethnic Elegance",
    content:
      "Working with ClickMorph has been a game-changer for our online ethnic wear store. Their web design expertise combined with marketing automation increased our average order value by 28% and reduced cart abandonment significantly.",
  },
]

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="testimonials" className="py-20 px-6 bg-black/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what businesses like yours have achieved with ClickMorph.
        </p>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black/50 border border-purple-500/10 rounded-lg p-6 hover:border-purple-500/30 
                       transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10
                       grid-item relative"
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <Quote className="text-purple-500/30 w-10 h-10 absolute top-4 right-4" />
              <p className="text-gray-300 mb-6 italic">{testimonial.content}</p>
              <div className="mt-auto">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
