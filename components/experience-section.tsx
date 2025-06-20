"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Briefcase, Code2, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Backend Developer Intern",
    company: "Advertyzement",
    location: "Remote",
    period: "Feb 2025 – May 2025",
    type: "Internship",
    description: "Working on backend systems for intelligent dining solutions and payment processing.",
    achievements: [
      "Integrated intelligent dine-in cart logic for smooth handling of both new and ongoing table orders",
      "Engineered GST calculations for diverse geographic scenarios (intra/interstate, UT) with proper tax rules",
      "Developed a secure, employee-only coupon management system with dynamic, category-specific discount rules"
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "Payment APIs"],
    current: true,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Frontend Developer Intern",
    company: "SafeYourWeb",
    location: "Remote", 
    period: "Feb 2025 – May 2025",
    type: "Internship",
    description: "Developing interactive user interfaces and dashboard systems for enhanced user experiences.",
    achievements: [
      "Designed interactive dashboards for managing customer feedback with full CRUD functionality and real-time UI updates",
      "Implemented Redux for managing user-specific course tracking, learning paths, and result analytics",
      "Added system readiness checks (camera, mic, network) to ensure reliable performance before exams or interactions"
    ],
    technologies: ["React.js", "Redux", "TypeScript", "Tailwind CSS"],
    current: true,
    color: "from-purple-600 to-pink-600"
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Pyramid Overlays */}
      <motion.div 
        className="absolute top-20 left-20 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[90px] border-l-transparent border-r-transparent border-b-indigo-100/30 dark:border-b-indigo-600/20"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-32 right-16 w-0 h-0 border-l-[80px] border-r-[80px] border-b-[120px] border-l-transparent border-r-transparent border-b-emerald-100/25 dark:border-b-emerald-600/15"
        animate={{
          rotate: [360, 0],
          x: [0, -30, 30, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full"
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
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
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building scalable solutions and contributing to innovative projects across different domains
          </p>
        </motion.div>

        {/* Modern Card Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative p-8 hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm group-hover:-translate-y-2 overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Header Section */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          {exp.current && (
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 mb-2">
                              Current Position
                            </Badge>
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                {/* Achievements Section */}
                <div className="relative z-10 mb-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="relative z-10">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors hover:scale-105"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${exp.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Ready to collaborate on your next project?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on challenging projects and contribute to innovative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="w-4 h-4" />
              Let's Connect
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}