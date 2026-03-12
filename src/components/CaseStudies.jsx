import { useState } from 'react'
import { X, ExternalLink, CheckCircle, ArrowRight, Star, TrendingUp, Clock, Award } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'
import ScrollAnimated from './ScrollAnimated'

const CaseStudyModal = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-3xl max-w-5xl max-h-[90vh] overflow-y-auto w-full shadow-large"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-8 flex justify-between items-start backdrop-blur-xs bg-white/95 dark:bg-gray-800/95">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">{caseStudy.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">{caseStudy.shortDescription}</p>
            </div>
            <motion.button
              onClick={onClose}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-2xl transition-colors ml-6"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} className="text-gray-500 dark:text-gray-400" />
            </motion.button>
          </div>

          <div className="p-8 space-y-12">
            {/* Overview */}
            <ScrollAnimated variants="fadeInUp" delay={0.1}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h3>
                <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">{caseStudy.overview}</p>
              </div>
            </ScrollAnimated>

            {/* Architecture */}
            <ScrollAnimated variants="fadeInUp" delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Architecture</h3>
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-6">
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">{caseStudy.architecture.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {caseStudy.architecture.components.map((component, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xs rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle size={20} className="text-primary-600 dark:text-primary-400 flex-shrink-0" />
                        <span className="text-gray-800 dark:text-gray-200 font-medium">{component}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimated>

            {/* Images */}
            <ScrollAnimated variants="fadeInUp" delay={0.3}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Implementation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudy.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-xl mb-4 flex items-center justify-center">
                        <span className="text-gray-400 dark:text-gray-500 text-lg">Image Placeholder</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{image.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{image.alt}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollAnimated>

            {/* Technical Breakdown */}
            <ScrollAnimated variants="fadeInUp" delay={0.4}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Breakdown</h3>
                <div className="space-y-6">
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="text-primary-600 dark:text-primary-400" size={24} />
                      Challenge
                    </h4>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{caseStudy.technicalBreakdown.challenge}</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                      <Star className="text-primary-600 dark:text-primary-400" size={24} />
                      Solution
                    </h4>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{caseStudy.technicalBreakdown.solution}</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Clock className="text-primary-600 dark:text-primary-400" size={24} />
                      Implementation Details
                    </h4>
                    <ul className="space-y-3">
                      {caseStudy.technicalBreakdown.implementation.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1,
                            ease: [0.25, 0.1, 0.25, 1]
                          }}
                          viewport={{ once: true }}
                        >
                          <ArrowRight size={20} className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </ScrollAnimated>

            {/* Tools Used */}
            <ScrollAnimated variants="fadeInUp" delay={0.5}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tools Used</h3>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.toolsUsed.map((tool, index) => (
                    <motion.span
                      key={index}
                      className="bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-xl font-medium border border-primary-200 dark:border-primary-700"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.05,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollAnimated>

            {/* Impact */}
            <ScrollAnimated variants="fadeInUp" delay={0.6}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Impact & Results</h3>
                <div className="bg-gradient-to-br from-success-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-success-200 dark:border-gray-700">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {caseStudy.impact.metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xs rounded-xl p-4 border border-success-200 dark:border-gray-700"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.1,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-3">
                          <Award className="text-success-600 dark:text-success-400" size={20} />
                          <span className="text-success-800 dark:text-success-200 font-bold">{metric}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg">{caseStudy.impact.description}</p>
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const CaseStudies = ({ selectedCaseStudy, setSelectedCaseStudy }) => {
  return (
    <>
      <section id="case-studies" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-container container-padding">
          {/* Header */}
          <ScrollAnimated variants="fadeInUp" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Case Studies
              </h2>
              <div className="accent-line mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real-world solutions delivering measurable business impact and transformation
              </p>
            </div>
          </ScrollAnimated>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="card-hover group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedCaseStudy(study)}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <motion.div 
                        className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium mb-3"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star size={14} />
                        Case Study {study.id}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        {study.shortDescription}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-6">
                      <motion.div 
                        className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ExternalLink size={20} className="text-primary-600 dark:text-primary-400" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.toolsUsed.slice(0, 3).map((tool, toolIndex) => (
                      <motion.span
                        key={toolIndex}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + toolIndex * 0.05,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                    {study.toolsUsed.length > 3 && (
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700">
                        +{study.toolsUsed.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <motion.button
                      className="btn-ghost flex items-center gap-2"
                      whileHover={{ gap: "0.75rem" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="font-medium">View Details</span>
                      <ArrowRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyModal 
        caseStudy={selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
      />
    </>
  )
}

export default CaseStudies
