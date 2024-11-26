"use client"

import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"
import { GradientHeading } from "@/components/ui/gradient-heading"
import { MotionDiv } from "@/lib/motion"


export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <GradientHeading className="text-5xl md:text-6xl lg:text-7xl">
            {"<CodaFolks/>"}
          </GradientHeading>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Your Gateway to Open-Source Projects and Practical Software Learning
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center z-10">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700" asChild>
              <a href="https://github.com/codafolks" target="_blank"  rel="noreferrer noopener" >
                <GithubIcon className="mr-2 h-5 w-5" />
                Explore Projects
              </a>
            </Button>
            {/* <Button size="lg" variant="outline" className="border-violet-700/20 hover:bg-violet-700/10">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Button> */}
          </div>
        </MotionDiv>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
        <div className="absolute inset-0 scale-x-[2] blur-[100px] opacity-50 bg-gradient-to-r from-violet-600/30 via-transparent to-indigo-600/30" />
      </div>
    </div>
  )
}