"use client";

import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <div className="relative py-24">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-3xl border border-violet-700/20 bg-gradient-to-r from-violet-950/50 to-indigo-950/50">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.02]" />
          </div>
          <div className="relative mx-auto max-w-2xl py-16 text-center">
            <h2 className="font-bold text-3xl text-foreground tracking-tight sm:text-4xl">Be a CodaFolk</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-8">
              Ready to explore, learn, and grow? Follow along as we build this community, or jump right in by browsing
              the projects and courses.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
                asChild
              >
                <a href="https://github.com/codafolks" target="_blank" rel="noreferrer noopener">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {/* <Button variant="outline" size="lg" className="border-violet-700/20 hover:bg-violet-700/10">
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
