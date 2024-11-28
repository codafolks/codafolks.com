"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 h-10 w-10 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-accent"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === "dark" ? (
          <motion.div
            key="dark"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-5 w-5" />
            <span className="sr-only">Switch to light mode</span>
          </motion.div>
        ) : (
          <motion.div
            key="light"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -180 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-5 w-5" />
            <span className="sr-only">Switch to dark mode</span>
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
