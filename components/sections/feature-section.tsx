"use client"

import { Code, GraduationCap, Users } from "lucide-react"
import { MotionDiv } from "@/lib/motion"

const features = [
  {
    name: "Open-Source Innovation",
    description: "Dive into projects crafted by Falconiere Barbosa. Explore solutions, contribute, or find inspiration for your next big idea.",
    icon: Code,
  },
  {
    name: "Hands-On Learning",
    description: "Discover courses designed to bridge the gap between theory and practice. From fundamental concepts to advanced techniques.",
    icon: GraduationCap,
  },
  {
    name: "Community-Driven",
    description: "Join a thriving community of developers focused on sharing knowledge and growing together.",
    icon: Users,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function FeatureSection() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-violet-400">Why CodaFolks?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            For Developers, By a Developer
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            CodaFolks isn't just a platform—it's a passion project, born from years of coding and learning. Each resource is crafted with care, aimed at helping others level up their skills.
          </p>
        </div>
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <MotionDiv
              key={feature.name}
              variants={item}
              className="relative overflow-hidden rounded-lg border border-violet-700/20 bg-violet-950/10 px-8 py-10"
            >
              <div className="flex items-center gap-x-3">
                <feature.icon className="h-6 w-6 text-violet-400" aria-hidden="true" />
                <h3 className="text-lg font-semibold leading-7 text-foreground">{feature.name}</h3>
              </div>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{feature.description}</p>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </div>
  )
}