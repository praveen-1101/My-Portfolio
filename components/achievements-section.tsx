"use client"

import { motion } from "framer-motion"
import { Trophy, Target, Award, Code, Star, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const achievements = [
  {
    title: "LeetCode Champion",
    description: "Solved 500+ algorithmic problems",
    details: "Peak rating: 1743",
    icon: Code,
    color: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    gradientColor: "from-orange-600 to-red-600",
    stats: {
      problems: "500+",
      rating: "1743",
      rank: "Top 15%"
    }
  },
  {
    title: "CodeChef Expert",
    description: "Maintained consistent 3⭐ rating",
    details: "Current rating: 1634",
    icon: Star,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
    gradientColor: "from-yellow-600 to-orange-600",
    stats: {
      problems: "400+",
      rating: "1634",
      stars: "3⭐"
    }
  },
  {
    title: "Performance Optimizer",
    description: "Improved application performance significantly",
    details: "40% faster database operations",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    gradientColor: "from-green-600 to-emerald-600",
    stats: {
      improvement: "40%",
      metric: "Speed",
      impact: "High"
    }
  },
  {
    title: "Certified Developer",
    description: "Multiple professional certifications",
    details: "Frontend, JavaScript, React, Version Control",
    icon: Award,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    gradientColor: "from-blue-600 to-cyan-600",
    stats: {
      certs: "4+",
      platform: "Coursera",
      level: "Professional"
    }
  }
]

const certifications = [
  "Frontend Development Specialization",
  "JavaScript Algorithms and Data Structures",
  "React.js Development",
  "Version Control with Git"
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Pyramid Overlays */}
      <motion.div 
        className="absolute top-24 left-24 w-0 h-0 border-l-[85px] border-r-[85px] border-b-[127px] border-l-transparent border-r-transparent border-b-amber-100/30 dark:border-b-amber-600/20"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-0 h-0 border-l-[70px] border-r-[70px] border-b-[105px] border-l-transparent border-r-transparent border-b-lime-100/25 dark:border-b-lime-600/15"
        animate={{
          rotate: [360, 0],
          x: [0, -35, 35, 0],
        }}
        transition={{
          duration: 29,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-1/2 left-1/5 w-14 h-14 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full"
        animate={{
          y: [0, -45, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 16,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Competitive programming achievements, performance improvements, and professional certifications
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm group hover:-translate-y-3 relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradientColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradientColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors text-lg">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    <Badge variant="secondary" className="mb-4 bg-muted/50 hover:bg-primary/20 transition-colors">
                      {achievement.details}
                    </Badge>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {Object.entries(achievement.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-2 rounded-lg bg-muted/30 group-hover:bg-muted/50 transition-colors">
                          <div className="font-semibold text-foreground text-sm">{value}</div>
                          <div className="text-muted-foreground capitalize text-xs">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${achievement.gradientColor} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Professional Certifications</h3>
                <p className="text-muted-foreground">Continuous learning and skill development through industry-recognized programs</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group/item hover:-translate-y-1"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                    <span className="text-foreground font-medium flex-1">{cert}</span>
                    <Badge variant="outline" className="text-xs bg-white/50 dark:bg-slate-800/50 border-blue-200 dark:border-blue-800">
                      Coursera
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}