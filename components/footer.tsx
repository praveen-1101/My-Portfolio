"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 bg-gradient-to-t from-myellow/10 to-background border-t border-border/40">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Back to top button */}
          <div className="flex justify-center">
            <Button
              variant="myellow"
              size="icon"
              onClick={scrollToTop}
              className="group rounded-full hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <ArrowUp className="w-5 h-5 group-hover:text-primary transition-colors" />
            </Button>
          </div>

          {/* Main footer content */}
          <div className="space-y-4">
   {/*          <motion.p 
              className="text-muted-foreground flex items-center justify-center gap-2 text-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Built with 
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </motion.span>
              using Next.js, TypeScript & Tailwind CSS
            </motion.p> */}

            <p className="text-sm text-muted-foreground">
              © {currentYear} Bora Sai Venkata Praveen Kumar. All rights reserved.
            </p>
          </div>

          {/* Theme toggle */}
         {/*  <div className="flex justify-center pt-4">
            <ThemeToggle />
          </div> */}

          {/* Decorative line */}
          <div className="max-w-xs mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute -bottom-1 right-1/4 w-96 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>
    </footer>
  )
}