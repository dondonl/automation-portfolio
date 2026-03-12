import { Cpu, Zap, Shield, Puzzle } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollAnimated from './ScrollAnimated'

const About = () => {
  const expertise = [
    {
      icon: <Zap className="text-primary-600" size={28} />,
      title: "Workflow Automation",
      description: "Designing and implementing automated workflows that reduce manual effort and eliminate repetitive tasks",
      color: "from-yellow-50 to-orange-50"
    },
    {
      icon: <Cpu className="text-primary-600" size={28} />,
      title: "AI Integrations",
      description: "Integrating artificial intelligence capabilities into existing systems to enhance decision-making and efficiency",
      color: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Shield className="text-primary-600" size={28} />,
      title: "System Architecture",
      description: "Building robust, scalable systems that can handle complex business requirements and growing demands",
      color: "from-green-50 to-emerald-50"
    },
    {
      icon: <Puzzle className="text-primary-600" size={28} />,
      title: "APIs & Webhooks",
      description: "Creating seamless connections between different platforms and services through custom integrations",
      color: "from-purple-50 to-pink-50"
    }
  ]

  const stats = [
    {
      value: "500+",
      label: "Hours Saved Monthly",
      description: "Through automated workflows",
      icon: "⏱️"
    },
    {
      value: "99.9%",
      label: "Accuracy Rate",
      description: "In automated processes",
      icon: "🎯"
    },
    {
      value: "50+",
      label: "Integrations Built",
      description: "Across various platforms",
      icon: "🔗"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-container container-padding">
        {/* Header */}
        <ScrollAnimated variants="fadeInUp" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Me
            </h2>
            <div className="accent-line mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Specialized in transforming complex business challenges into elegant automated solutions. 
              I bridge the gap between technical capabilities and business needs through strategic system design 
              and thoughtful automation.
            </p>
          </div>
        </ScrollAnimated>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={`rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-6 hover:scale-105 border border-gray-100 dark:border-gray-700 group bg-gradient-to-br ${item.color}`}>
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-soft"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Areas */}
        <ScrollAnimated variants="fadeInUp" delay={0.3}>
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Core Expertise Areas</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Specialized skills and capabilities that drive successful automation solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Workflow Design",
                  description: "Creating efficient, scalable automation workflows",
                  icon: <Zap className="text-primary-600 dark:text-primary-400" size={24} />
                },
                {
                  title: "System Integration", 
                  description: "Connecting disparate systems seamlessly",
                  icon: <Puzzle className="text-primary-600 dark:text-primary-400" size={24} />
                },
                {
                  title: "AI Implementation",
                  description: "Integrating AI capabilities into business processes",
                  icon: <Cpu className="text-primary-600 dark:text-primary-400" size={24} />
                }
              ].map((area, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {area.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{area.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimated>

        {/* Stats Section */}
        <ScrollAnimated variants="fadeInUp" delay={0.3}>
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Impact & Results</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Delivering measurable business value through intelligent automation and AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                    <motion.div 
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl mb-4 text-primary-600 dark:text-primary-400"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div 
                      className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimated>

        {/* Detailed Description */}
        <ScrollAnimated variants="fadeInUp" delay={0.4}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12 border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Approach</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                With expertise in internal tools development, SaaS integrations, and low-code platforms, 
                I help businesses leverage automation to streamline operations, reduce costs, and improve accuracy.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My approach combines technical excellence with practical business understanding to deliver solutions 
                that make a real impact. I focus on creating systems that are not just powerful, but also 
                maintainable and scalable for future growth.
              </p>
            </motion.div>
          </div>
        </ScrollAnimated>
      </div>
    </section>
  )
}

export default About
