import { Mail, Linkedin, Github, Send, Phone, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollAnimated from './ScrollAnimated'

const Contact = () => {
  
  const contactMethods = [
    {
      icon: <Mail className="text-primary-600" size={28} />,
      label: "Email",
      value: "don.longcanaya@gmail.com",
      href: "mailto:don.longcanaya@gmail.com",
      description: "For project inquiries and collaborations",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Linkedin className="text-primary-600" size={28} />,
      label: "LinkedIn",
      value: "linkedin.com/in/dondonlongcanaya",
      href: "https://www.linkedin.com/in/dondonlongcanaya/",
      description: "Professional network and updates",
      gradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <Github className="text-primary-600" size={28} />,
      label: "GitHub",
      value: "github.com/dondonl",
      href: "https://github.com/dondonl",
      description: "Open source projects and contributions",
      gradient: "from-purple-50 to-pink-50"
    }
  ]

  const contactInfo = [
    {
      icon: <Phone size={20} className="text-gray-600" />,
      text: "Available for calls by appointment"
    },
    {
      icon: <MapPin size={20} className="text-gray-600" />,
      text: "Remote-first, global collaboration"
    },
    {
      icon: <Clock size={20} className="text-gray-600" />,
      text: "Typically responds within 24 hours"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-container container-padding">
        {/* Header */}
        <ScrollAnimated variants="fadeInUp" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h2>
            <div className="accent-line mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how automation and AI can transform your business operations and drive meaningful results
            </p>
          </div>
        </ScrollAnimated>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className={`rounded-3xl p-8 h-full border border-gray-200 dark:border-gray-700 hover:shadow-large transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden bg-gradient-to-br ${contact.gradient}`}>
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-soft"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {contact.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {contact.label}
                    </h3>
                    
                    <div className="text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300 break-all font-semibold text-lg">
                      {contact.value}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {contact.description}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <motion.div 
                    className="flex items-center gap-2 mt-6 text-primary-600 dark:text-primary-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span>Get in touch</span>
                    <Send size={16} />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Main CTA Section */}
        <ScrollAnimated variants="fadeInUp" delay={0.3}>
          <div className="bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 dark:from-primary-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-12 mb-12 relative overflow-hidden">
            {/* Background decoration */}
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Send className="text-primary-600 dark:text-primary-400 mx-auto mb-6" size={48} />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Streamline Your Operations?
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                Whether you're looking to automate specific workflows, integrate AI capabilities, 
                or build custom automation systems, I'm here to help you achieve your goals efficiently.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:don.longcanaya@gmail.com"
                  className="btn-primary flex items-center justify-center gap-3 text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Mail size={20} />
                  Send Message
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/dondonlongcanaya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center gap-3 text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </div>
        </ScrollAnimated>

        {/* Additional Info */}
        <ScrollAnimated variants="fadeInUp" delay={0.4}>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-soft"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-200 font-medium">{info.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                I typically respond within 24 hours. For urgent matters, please mention "urgent" in your subject line.
              </p>
            </div>
          </div>
        </ScrollAnimated>
      </div>
    </section>
  )
}

export default Contact
