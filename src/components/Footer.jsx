import { ArrowUp, Mail, Linkedin, Github, Heart, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollAnimated from './ScrollAnimated'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      label: "Email",
      href: "mailto:don.longcanaya@gmail.com",
      icon: <Mail size={20} />
    },
    {
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/dondonlongcanaya/",
      icon: <Linkedin size={20} />
    },
    {
      label: "GitHub",
      href: "https://github.com/dondonl", 
      icon: <Github size={20} />
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-[0.02] dark:opacity-[0.05]"></div>
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-primary-600 dark:bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 dark:bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10 section-padding">
        <div className="max-container container-padding">
          {/* Main Content */}
          <div className="text-center space-y-8 mb-16">
            {/* Name and Title */}
            <ScrollAnimated variants="fadeInUp" delay={0.1}>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">Dondon Longcanaya</h3>
                <p className="text-xl text-gray-300 dark:text-gray-700">Automation & AI Systems Engineer</p>
              </div>
            </ScrollAnimated>

            {/* Accent Line */}
            <div className="accent-line mx-auto bg-gradient-to-r from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-700"></div>

            {/* Description */}
            <ScrollAnimated variants="fadeInUp" delay={0.2}>
              <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-gray-300 dark:text-gray-600 leading-relaxed text-lg">
                  Transforming business operations through intelligent automation and AI integration. 
                  Building systems that work smarter, not harder.
                </p>
                <p className="text-gray-400 dark:text-gray-500 leading-relaxed">
                  Specializing in workflow automation, AI integrations, and system architecture 
                  for businesses looking to scale efficiently.
                </p>
              </div>
            </ScrollAnimated>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gray-800/50 dark:bg-gray-200/50 backdrop-blur-xs border border-gray-700 dark:border-gray-300 px-6 py-3 rounded-2xl hover:bg-primary-600/20 dark:hover:bg-primary-600/30 hover:border-primary-500 dark:hover:border-primary-600 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.span
                    className="text-gray-300 dark:text-gray-700 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.icon}
                  </motion.span>
                  <span className="text-gray-300 dark:text-gray-700 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 dark:via-gray-300 to-transparent mb-12"></div>

          {/* Bottom Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Copyright */}
            <ScrollAnimated variants="fadeInLeft" delay={0.3}>
              <div className="text-gray-400 dark:text-gray-600 space-y-2">
                <motion.p 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <span>© {new Date().getFullYear()} Dondon Longcanaya</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart size={16} className="text-red-500" />
                  </motion.div>
                  <span>All rights reserved.</span>
                </motion.p>
                <div className="text-sm flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={14} className="text-primary-400 dark:text-primary-600" />
                  </motion.div>
                  <span className="italic">This portfolio website was generated with the assistance of Claude AI.</span>
                </div>
              </div>
            </ScrollAnimated>

            {/* Back to Top */}
            <ScrollAnimated variants="fadeInRight" delay={0.3}>
              <div className="flex justify-center md:justify-end">
                <motion.button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 hover:from-primary-700 hover:to-primary-800 dark:hover:from-primary-600 dark:hover:to-primary-500 text-white px-6 py-3 rounded-2xl transition-all duration-300 shadow-medium hover:shadow-large group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="group-hover:-translate-y-1 transition-transform duration-300"
                    whileHover={{ rotate: -45 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowUp size={20} />
                  </motion.div>
                  <span>Back to Top</span>
                </motion.button>
              </div>
            </ScrollAnimated>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
