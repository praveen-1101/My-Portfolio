"use client"

import { motion } from "framer-motion"
import { Code, Database, Palette, Server, Globe, Zap, BookOpen, Target, Coffee, Lightbulb } from "lucide-react"
import { Card } from "@/components/ui/card"

const skills = {
  "Languages": ["C", "C++", "Python", "JavaScript", "TypeScript"],
  "Frontend": ["React.js", "Next.js", "Tailwind CSS", "Redux"],
  "Backend": ["Node.js", "Express.js", "MongoDB"],
  "Tools": ["Git", "GitHub", "Postman", "Render", "VS Code"]
}

const skillIcons = {
  "Languages": Code,
  "Frontend": Palette,
  "Backend": Server,
  "Tools": Zap
}

const interests = [
  { icon: BookOpen, title: "Continuous Learning", desc: "Always exploring new technologies" },
  { icon: Target, title: "Problem Solving", desc: "Love tackling complex challenges" },
  { icon: Coffee, title: "Code & Coffee", desc: "Best combination for productivity" }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Pyramid Overlays */}
      <motion.div 
        className="absolute top-10 right-10 w-0 h-0 border-l-[70px] border-r-[70px] border-b-[105px] border-l-transparent border-r-transparent border-b-blue-100/30 dark:border-b-blue-600/20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-0 h-0 border-l-[90px] border-r-[90px] border-b-[135px] border-l-transparent border-r-transparent border-b-cyan-100/25 dark:border-b-cyan-600/15"
        animate={{
          rotate: [360, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating shapes */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_1px_5px_rgba(234,179,8,0.5)]">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-amber-400 mx-auto mb-8 rounded-full transition-all duration-300 group-hover:w-24 group-hover:scale-x-105" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  My Journey
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I'm currently pursuing my B.Tech in Computer Science Engineering, 
                  with a deep passion for creating innovative web solutions that solve real-world problems. 
                  My journey began with curiosity about how websites work, and it has evolved into a 
                  comprehensive understanding of full-stack development.
                </p>
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  What Drives Me
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I try to write clean and easy-to-understand code that works well
                and gives a good experience to users. I believe technology can turn
                ideas into real projects, and I enjoy building apps that are useful
                and make a difference. Also, exploring how different tools and frameworks work.
                </p>
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  Beyond Coding
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                When I’m not coding, I enjoy solving algorithm problems on competitive programming sites
                and learning about new web technologies. I also like building small side projects to apply
                what I’ve learned. Sometimes, I also
                participate in coding contests to challenge myself and improve my skills.
                </p>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Visakhapatnam, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
              
              {Object.entries(skills).map(([category, items], index) => {
                const IconComponent = skillIcons[category as keyof typeof skillIcons]
                
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">{category}</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default hover:scale-105"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">What I'm Passionate About</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon
              return (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center hover:shadow-yellow-400/20 hover:scale-[1.03] transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-yellow-500/30 group-hover:animate-none group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-yellow-600 transition-colors">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {interest.desc}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}