"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What is AI-powered marketing automation?",
    answer:
      "AI-powered marketing automation combines artificial intelligence with automated marketing processes to optimize campaigns, personalize customer interactions, and generate leads more efficiently. It uses machine learning algorithms to analyze data, predict customer behavior, and automate repetitive tasks, allowing your team to focus on strategy and creativity.",
  },
  {
    question: "How can ClickMorph help my business grow?",
    answer:
      "ClickMorph helps businesses grow by automating time-consuming marketing tasks, generating qualified leads through AI, optimizing conversion rates, and providing data-driven insights. Our solutions are designed to scale with your business, ensuring sustainable growth without proportionally increasing your workload or marketing costs.",
  },
  {
    question: "What makes ClickMorph different from other marketing agencies?",
    answer:
      "Unlike traditional agencies, ClickMorph offers a results-based guarantee, specializes in specific industries for deeper expertise, maintains local presence for better accessibility, and integrates cutting-edge AI technology with proven marketing strategies. We focus on measurable outcomes rather than activities, ensuring your marketing investment delivers real business growth.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "While some clients see initial results within weeks, meaningful business impact typically emerges within 2-3 months. We establish clear KPIs and milestones at the beginning of our partnership and provide regular progress reports. Our approach focuses on sustainable growth rather than quick but temporary gains.",
  },
  {
    question: "Do I need technical knowledge to use your services?",
    answer:
      "No technical knowledge is required. We handle all technical aspects of implementation and provide user-friendly dashboards and reports. Our team offers comprehensive onboarding and ongoing support to ensure you can easily understand and leverage the insights and tools we provide.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We measure success through concrete business outcomes like increased revenue, lead quality improvement, conversion rate enhancement, and customer acquisition cost reduction. Before starting any campaign, we establish clear, measurable KPIs aligned with your business goals and regularly track progress against these benchmarks.",
  },
  {
    question: "Can your solutions integrate with my existing CRM and tools?",
    answer:
      "Yes, our solutions are designed to integrate seamlessly with popular CRM systems and marketing tools. We support integrations with Salesforce, HubSpot, Mailchimp, Shopify, and many others. If you use custom or less common tools, our technical team can develop custom integrations to ensure a smooth workflow.",
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Get answers to common questions about marketing automation, AI technology, and how our services can help your
          business grow.
        </p>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-purple-500/10 rounded-lg overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-black/50 hover:bg-black/70 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base md:text-lg font-semibold pr-4">{item.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-purple-500 flex-shrink-0"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 bg-black/30 border-t border-purple-500/10">
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
