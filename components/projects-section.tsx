"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Users, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Skill-Space",
    description: "A full-stack resume analyzer that parses resumes and job descriptions to provide instant feedback and highlight missing skills.",
    longDescription: "Advanced resume analysis platform with intelligent skill-matching algorithms and dynamic feedback system.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Dynamic skill-matching algorithms to assess alignment with job roles",
      "Modular frontend components and routing reduced load times by 30%",
      "Real-time resume parsing and analysis",
      "Interactive skill gap visualization"
    ],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    stats: {
      users: "500+",
      performance: "30% faster",
      accuracy: "95%"
    }
  },
  {
    title: "Flow2Dest",
    description: "Travel assistant that suggests top tourist spots with real-time weather and optimal travel routes (bus/train/auto).",
    longDescription: "Comprehensive travel planning platform with integrated maps, weather forecasting, and route optimization.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "React", "Node.js", "Public APIs"],
    features: [
      "Integrated interactive maps with filters using Chart.js and Radix UI",
      "Auth + preference persistence powered by NextAuth and localStorage",
      "Real-time weather integration",
      "Multi-modal route optimization"
    ],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    stats: {
      routes: "10K+",
      cities: "100+",
      accuracy: "92%"
    }
  },
  {
    title: "Subject Review Manager",
    description: "Web platform for students to rate and review college subjects anonymously.",
    longDescription: "Anonymous review platform with advanced analytics and administrative dashboard for academic insights.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Anonymous rating and review system",
      "MongoDB bulk writes boosted submission performance by 40%",
      "Real-time charts and analytical dashboards for admins",
      "Advanced filtering and search capabilities"
    ],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
    stats: {
      reviews: "1K+",
      subjects: "200+",
      performance: "40% faster"
    }
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Pyramid Overlays */}
      <motion.div 
        className="absolute top-16 right-12 w-0 h-0 border-l-[75px] border-r-[75px] border-b-[112px] border-l-transparent border-r-transparent border-b-violet-100/30 dark:border-b-violet-600/20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-24 left-16 w-0 h-0 border-l-[65px] border-r-[65px] border-b-[97px] border-l-transparent border-r-transparent border-b-teal-100/25 dark:border-b-teal-600/15"
        animate={{
          rotate: [360, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating shapes */}
      <motion.div 
        className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-rose-400/20 to-orange-400/20 rotate-45"
        animate={{
          x: [0, 40, -40, 0],
          rotate: [45, 225, 45],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-600 to-lime-400 mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of full-stack applications demonstrating scalable architecture and innovative solutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm group">
                <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-0`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${project.featured ? 'lg:col-span-1' : 'lg:col-span-1'}`}>
                    <div className="aspect-video lg:aspect-square relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {project.featured && (
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-600 to-lime-400 text-white border-0">
                          Featured
                        </Badge>
                      )}

                      {/* Overlay with quick stats */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-4 text-white text-sm">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="font-bold">{value}</div>
                              <div className="text-xs opacity-80 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-6 lg:p-8 ${project.featured ? 'lg:col-span-1' : 'lg:col-span-2'}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-4">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <Button variant="myellow" className="flex-1 group relative overflow-hidden border-0 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl">
                          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Live Demo
                          </span>
                        </Button>
                        <Button variant="outline" className="flex-1 group relative overflow-hidden border-2 border-myellow/30 dark:border-myellow/60 bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:bg-myellow/10 dark:hover:bg-myellow/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-myellow/10 rounded-xl hover:border-myellow dark:hover:border-myellow">
                          <span className="absolute inset-0 bg-gradient-to-r from-myellow/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <span className="relative z-10 flex items-center justify-center gap-2 text-black dark:text-myellow group-hover:text-myellow dark:group-hover:text-white">
                            <Github className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
                            View Code
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}