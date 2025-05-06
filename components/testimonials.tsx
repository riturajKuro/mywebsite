"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

interface Testimonial {
  name: string
  position: string
  company: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Abhishek Naha",
    position: "CEO",
    company: "ADS Interior",
    content:
      "ClickMorph transformed our interior design firm's marketing approach completely. Their AI-driven lead generation increased our qualified leads by 137% in just three months. The team's expertise and responsiveness made the entire process seamless.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    position: "Marketing Director",
    company: "TechVision India",
    content:
      "As a growing tech company, I was skeptical about marketing agencies, but ClickMorph proved their value immediately. Their data-driven approach and transparent reporting gave us confidence, and the results speak for themselves—40% growth in customer acquisition.",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    position: "Founder",
    company: "Spice Route Exports",
    content:
      "The automation systems ClickMorph implemented saved our export business countless hours while improving our conversion rates. Their understanding of our industry challenges and personalized solutions made all the difference.",
    rating: 4,
  },
  {
    name: "Ananya Desai",
    position: "E-commerce Director",
    company: "Ethnic Elegance",
    content:
      "Working with ClickMorph has been a game-changer for our online ethnic wear store. Their web design expertise combined with marketing automation increased our average order value by 28% and reduced cart abandonment significantly.",
    rating: 5,
  },
]

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gradient-to-b from-black/30 to-black/50 relative overflow-hidden"
    >
      {/* Tech-inspired background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="h-2 bg-purple-500"
              style={{
                gridColumn: `span ${Math.floor(Math.random() * 6) + 1}`,
                opacity: Math.random() * 0.5 + 0.25,
                transform: `translateX(${Math.random() * 100 - 50}%)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-[#ff4d4d] to-[#22D3EE]"></div>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Don't just take our word for it. Here's what businesses like yours have achieved with ClickMorph.
          </motion.p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 
                       transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10
                       grid-item relative backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.15), 0 10px 10px -5px rgba(139, 92, 246, 0.1)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <Quote className="text-purple-500/30 w-10 h-10 absolute top-4 right-4" />

              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`}
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic relative">"{testimonial.content}"</p>

              <div className="mt-auto pt-4 border-t border-purple-500/10">
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
