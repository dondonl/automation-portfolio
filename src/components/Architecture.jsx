import { ArrowRight, Shield, Zap, Brain, Lock, Code, Cpu, Database, Cloud } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollAnimated from './ScrollAnimated'

const Architecture = () => {
  
  const principles = [
    {
      icon: <Zap className="text-primary-600" size={28} />,
      title: "Event-Driven Automation",
      description: "Systems that respond intelligently to business events in real-time",
      gradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: <Code className="text-primary-600" size={28} />,
      title: "API-First Architecture",
      description: "Building with interoperability and future integrations in mind",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Brain className="text-primary-600" size={28} />,
      title: "AI-Assisted Workflows",
      description: "Leveraging artificial intelligence to enhance decision-making and efficiency",
      gradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <Lock className="text-primary-600" size={28} />,
      title: "Security-Focused Integrations",
      description: "Prioritizing data protection and compliance in every connection",
      gradient: "from-purple-50 to-pink-50"
    },
    {
      icon: <Shield className="text-primary-600" size={28} />,
      title: "Low-Code + Custom API Hybrid",
      description: "Combining rapid development with powerful custom solutions",
      gradient: "from-gray-50 to-slate-50"
    }
  ]

  const architectureLayers = [
    { 
      icon: <Database size={24} />, 
      title: "Data Sources", 
      items: ["Forms", "APIs", "Webhooks"],
      color: "from-blue-400 to-blue-600"
    },
    { 
      icon: <Cpu size={24} />, 
      title: "Automation Layer", 
      items: ["n8n/Zapier", "AI Processing", "Logic Engine"],
      color: "from-green-400 to-green-600"
    },
    { 
      icon: <Cloud size={24} />, 
      title: "Output Systems", 
      items: ["Databases", "Notifications", "Reports"],
      color: "from-purple-400 to-purple-600"
    }
  ]

  return (
    <section id="architecture" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-container container-padding">
        {/* Header */}
        <ScrollAnimated variants="fadeInUp" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Architecture Philosophy
            </h2>
            <div className="accent-line mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Building systems that are not just automated, but intelligent, secure, and scalable for long-term success
            </p>
          </div>
        </ScrollAnimated>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {principles.map((principle, index) => (
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
              whileHover={{ y: -5 }}
            >
              <div className={`rounded-3xl p-8 h-full border border-gray-200 dark:border-gray-700 hover:shadow-large transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden bg-gradient-to-br ${principle.gradient}`}>
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-soft"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {principle.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <ScrollAnimated variants="fadeInUp" delay={0.3}>
          <div className="bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl p-12 mb-12 border border-primary-200 dark:border-gray-700">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">System Architecture Overview</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A modular approach that allows for easy scaling, maintenance, and integration of new technologies
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-medium p-8 mb-6 hover:shadow-large transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center mb-4">
                      <motion.div 
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${layer.color} rounded-2xl text-white mb-4`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {layer.icon}
                      </motion.div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{layer.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {layer.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.2 + itemIndex * 0.1,
                            ease: [0.25, 0.1, 0.25, 1]
                          }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {index < architectureLayers.length - 1 && (
                    <div className="hidden lg:block">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="text-primary-600 dark:text-white" size={32} />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimated>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="text-primary-600 dark:text-primary-400" size={32} />, title: "Scalable Design", desc: "Architecture that grows with your business needs" },
            { icon: <Shield className="text-primary-600 dark:text-primary-400" size={32} />, title: "Enterprise Security", desc: "Built-in security best practices at every layer" },
            { icon: <Brain className="text-primary-600 dark:text-primary-400" size={32} />, title: "AI-Enhanced", desc: "Intelligent automation that learns and improves" }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600 hover:shadow-medium transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {benefit.icon}
              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Architecture
