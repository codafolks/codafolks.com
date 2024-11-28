"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, GithubIcon } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
            <h1 className="relative bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text pb-2 font-bold text-5xl text-transparent md:text-6xl lg:text-7xl">
              CodaFolks
            </h1>
          </motion.div>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-xl md:text-2xl">
            Your Gateway to Open-Source Projects and Practical Software Learning
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
            >
              <GithubIcon className="mr-2 h-5 w-5" />
              Explore Projects
            </Button>
            <Button size="lg" variant="outline" className="border-violet-700/20 hover:bg-violet-700/10">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-full w-full max-w-7xl">
        <div className="absolute inset-0 scale-x-[2] bg-gradient-to-r from-violet-600/30 via-transparent to-indigo-600/30 opacity-50 blur-[100px]" />
      </div>
    </div>
  );
}
