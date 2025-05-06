"use client"

import { Timeline } from "@/components/ui/timeline"

const timelineData = [
  {
    title: "Welcome",
  },
  {
    title: "Our Services",
  },
  {
    title: "Challenges",
  },
  {
    title: "Our Difference",
  },
  {
    title: "Get Started",
  },
]

export default function GlobalTimeline() {
  return <Timeline data={timelineData} />
}
