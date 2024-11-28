"use client";

import { MotionDiv } from "@/lib/motion";
import { Sparkles } from "lucide-react";
export function WhatsNextSection() {
  return (
    <div className="relative py-24">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-violet-700/20 bg-violet-950/50 p-2">
            <Sparkles className="h-6 w-6 text-violet-400" />
          </div>
          <h2 className="font-bold text-3xl text-foreground tracking-tight sm:text-4xl">What&apos;s Next?</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-8">
            This is just the beginning. As I grow CodaFolks, I want your input and collaboration. Your feedback, ideas,
            and contributions can shape this into a thriving resource for developers everywhere.
          </p>
          <div className="mt-10 rounded-lg border border-violet-700/20 bg-violet-950/10 p-6">
            <p className="text-lg text-muted-foreground">
              Join us in building a platform that empowers developers through practical learning, meaningful
              collaboration, and shared growth. Together, we can create something truly special.
            </p>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
