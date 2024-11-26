"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <div className="relative py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-950/50 to-indigo-950/50 border border-violet-700/20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.02]" />
          </div>
          <div className="relative mx-auto max-w-2xl text-center py-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Be a CodaFolk
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Ready to explore, learn, and grow? Follow along as we build this community, or jump right in by browsing the projects and courses.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-violet-700/20 hover:bg-violet-700/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}