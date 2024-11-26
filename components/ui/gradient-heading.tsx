"use client"
import { MotionDiv } from "@/lib/motion"
import { cn } from "@/lib/utils"
interface GradientHeadingProps {
  children: React.ReactNode
  className?: string
}
export function GradientHeading({ children, className }: GradientHeadingProps) {
  return (
    <MotionDiv
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative inline-block"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl text-center" />
      <h1 className={cn(
        "relative font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 pb-2",
        className
      )}>
        {children}
      </h1>
    </MotionDiv>
  )
}