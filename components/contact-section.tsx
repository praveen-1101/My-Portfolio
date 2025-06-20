"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, ExternalLink, Send } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/praveenkumar",
    icon: Github,
    description: "View my code repositories and contributions",
    color: "from-gray-600 to-gray-800"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/praveenkumar",
    icon: Linkedin,
    description: "Connect with me professionally",
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/praveenkumar",
    icon: ExternalLink,
    description: "Check out my problem-solving journey",
    color: "from-orange-600 to-red-600"
  },
  {
    name: "CodeChef",
    url: "https://codechef.com/users/praveenkumar",
    icon: ExternalLink,
    description: "View my competitive programming profile",
    color: "from-yellow-600 to-orange-600"
  }
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Pyramid Overlays */}
      <motion.div 
        className="absolute top-32 right-24 w-0 h-0 border-l-[95px] border-r-[95px] border-b-[142px] border-l-transparent border-r-transparent border-b-rose-100/30 dark:border-b-rose-600/20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 31,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-16 left-12 w-0 h-0 border-l-[55px] border-r-[55px] border-b-[82px] border-l-transparent border-r-transparent border-b-sky-100/25 dark:border-b-sky-600/15"
        animate={{
          rotate: [360, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating shapes */}
      <motion.div 
        className="absolute top-1/4 left-1/5 w-18 h-18 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rotate-45"
        animate={{
          x: [0, 50, -50, 0],
          rotate: [45, 225, 45],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Email</p>
                    <a 
                      href="mailto:borapraveen1101@gmail.com"
                      className="text-muted-foreground hover:text-blue-600 transition-colors text-base"
                    >
                      borapraveen1101@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Location</p>
                    <p className="text-muted-foreground text-base">Visakhapatnam, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect on Social</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon
                  
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Card className="p-4 hover:shadow-xl transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm group-hover:-translate-y-2 relative overflow-hidden">
                        {/* Background gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        <div className="relative z-10 flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground group-hover:text-blue-600 transition-colors">
                              {link.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-600/20 border-border/50 bg-background/50 backdrop-blur-sm hover:border-blue-400 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-600/20 border-border/50 bg-background/50 backdrop-blur-sm hover:border-blue-400 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-600/20 border-border/50 bg-background/50 backdrop-blur-sm hover:border-blue-400 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-600/20 resize-none border-border/50 bg-background/50 backdrop-blur-sm hover:border-blue-400 focus:border-blue-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="myellow"
                    className="w-full group relative overflow-hidden py-7 text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border-0 rounded-2xl"
                  >
                    <span className="absolute inset-0 bg-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
                      Send Message
                    </span>
                    <span className="absolute inset-0 rounded-2xl bg-myellow blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}