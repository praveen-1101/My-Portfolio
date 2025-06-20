"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/typewriter-effect"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Diamond Overlay is handled globally. Add a subtle dark background. */}
      <div className="absolute inset-0 bg-black/95" />
      
      {/* Remove all blue/cyan shapes for a clean look. */}
      <motion.div 
        className="container max-w-6xl mx-auto px-4 text-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-br from-myellow via-white to-myellow bg-clip-text text-transparent drop-shadow-[0_4px_32px_rgba(255,255,200,0.7)]">
            Praveen Kumar
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <TypewriterEffect 
            words={[
              "Full-Stack Developer | React Specialist | UI/UX Enthusiast"
            ]}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(255,255,200,0.3)]"
          />
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-black dark:text-white max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I am a Computer Science undergrad skilled in creating scalable full-stack web apps 
          with seamless UX and efficient backend logic.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button 
            variant="myellow"
            size="lg" 
            onClick={scrollToProjects}
            className="group relative overflow-hidden px-10 py-7 text-lg font-bold shadow-lg shadow-myellow/30 hover:scale-110 transition-all duration-500 border-0 rounded-2xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-myellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3">
              Explore My Work
              <ExternalLink className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 rounded-2xl bg-myellow blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group relative overflow-hidden border-2 border-myellow/60 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-10 py-7 text-lg font-semibold hover:bg-myellow/10 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-myellow/10 rounded-2xl hover:border-myellow"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-myellow/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3 text-black dark:text-myellow group-hover:text-myellow dark:group-hover:text-white">
              <Download className="w-5 h-5 group-hover:translate-y-2 transition-transform duration-300" />
              Download Resume
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToContact}
            className="group relative overflow-hidden border-2 border-myellow/60 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-10 py-7 text-lg font-semibold hover:bg-myellow/10 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-myellow/10 rounded-2xl hover:border-myellow"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-myellow/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3 text-black dark:text-myellow group-hover:text-myellow dark:group-hover:text-white">
              <Mail className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              Contact Me
            </span>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="animate-bounce mt-8"
        >
          <ArrowDown className="w-10 h-10 mx-auto text-myellow drop-shadow-[0_2px_8px_rgba(255,255,200,0.5)]" />
          <div className="text-myellow mt-2 text-lg font-medium">Scroll to explore</div>
        </motion.div>
      </motion.div>
    </section>
  )
}