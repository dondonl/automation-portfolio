import { Zap, Bot, Globe, Link, Star, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollAnimated from './ScrollAnimated'

const Skills = () => {
  
  const skillCategories = [
    {
      title: "Automation",
      icon: <Zap size={32} />,
      emoji: "⚡",
      skills: ["n8n", "Zapier", "Make"],
      description: "Workflow automation platforms",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      title: "AI",
      icon: <Bot size={32} />,
      emoji: "🤖",
      skills: ["OpenAI", "Gemini", "Dialogflow CX", "Windsurf", "Claude Code"],
      description: "Artificial intelligence tools",
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "Platforms",
      icon: <Globe size={32} />,
      emoji: "🌐",
      skills: ["Bubble.io", "Cognito Forms", "Google Workspace", "Caspio", "Lovable"],
      description: "Development platforms",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      title: "Integration",
      icon: <Link size={32} />,
      emoji: "🔗",
      skills: ["REST APIs", "Webhooks", "JSON"],
      description: "Integration technologies",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-container container-padding">
        {/* Header */}
        <ScrollAnimated variants="fadeInUp" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Skills & Tools
            </h2>
            <div className="accent-line mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive toolkit for building powerful automation and AI solutions that drive business transformation
            </p>
          </div>
        </ScrollAnimated>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className={`rounded-3xl p-8 h-full border border-gray-200 dark:border-gray-700 hover:shadow-large transition-all duration-500 group bg-gradient-to-br ${category.bgGradient}`}>
                {/* Icon and Emoji */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white shadow-medium`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {category.icon}
                  </motion.div>
                  <motion.div 
                    className="text-4xl opacity-60"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {category.emoji}
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm font-medium">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xs rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-soft transition-all duration-300"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + skillIndex * 0.05,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800 dark:text-gray-200 font-semibold text-sm">{skill}</span>
                        <motion.div
                          className="text-yellow-500"
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Star size={14} />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <ScrollAnimated variants="fadeInUp" delay={0.3}>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-soft border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technology Philosophy</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Combining low-code platforms with custom API development to create solutions that are both 
                powerful and accessible
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Zap className="text-primary-600 dark:text-primary-400" size={24} />, title: "Rapid Development", desc: "Leveraging low-code platforms for faster delivery" },
                { icon: <Bot className="text-primary-600 dark:text-primary-400" size={24} />, title: "AI-Powered", desc: "Intelligent automation at every step" },
                { icon: <Link className="text-primary-600 dark:text-primary-400" size={24} />, title: "Seamless Integration", desc: "Connecting all your systems effortlessly" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
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
                    className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <motion.button
                className="btn-ghost flex items-center gap-2 mx-auto"
                whileHover={{ gap: "0.75rem" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="font-medium">Explore my work</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </ScrollAnimated>
      </div>
    </section>
  )
}

export default Skills
