"use client";
import { MotionDiv } from "@/lib/motion";
import { cn } from "@/lib/utils";
interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}
export function GradientHeading({ children, className }: GradientHeadingProps) {
  return (
    <MotionDiv
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative inline-block"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 text-center blur-3xl" />
      <h1
        className={cn(
          "relative bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text pb-2 font-bold text-transparent",
          className,
        )}
      >
        {children}
      </h1>
    </MotionDiv>
  );
}
