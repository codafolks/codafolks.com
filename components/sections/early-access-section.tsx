"use client"

import { useState } from "react"
import { Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { MotionDiv } from "@/lib/motion"

export function EarlyAccessSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast({
        title: "Thanks for joining!",
        description: "We'll keep you updated on CodaFolks progress.",
      })
      setEmail("")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-violet-950/30" />
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-violet-950/50 border border-violet-700/20">
            <Rocket className="h-6 w-6 text-violet-400" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Coming Soon</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            CodaFolks is currently in development. Be among the first to know when we launch and get early access to our platform.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="max-w-sm bg-background/50 border-violet-700/20"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
            >
              {isLoading ? "Subscribing..." : "Get Early Access"}
            </Button>
          </form>
          <p className="mt-4 text-sm text-muted-foreground">
            Join 150+ developers already on the waitlist
          </p>
        </div>
      </MotionDiv>
    </div>
  )
}