import { useState } from 'react'
import { useTheme } from './contexts/ThemeContext'
import { motion } from 'framer-motion'
import { Heart, Sparkles, ArrowUp } from 'lucide-react'
import Hero from './components/Hero'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-medium border border-gray-200 dark:border-gray-700 hover:shadow-large transition-all duration-300"
    >
      {isDark ? (
        <span className="text-2xl">☀️</span>
      ) : (
        <span className="text-2xl">🌙</span>
      )}
    </button>
  )
}

const About = () => {
  const expertise = [
    {
      icon: "⚡",
      title: "Workflow Automation",
      description: "Designing and implementing automated workflows that reduce manual effort and eliminate repetitive tasks",
      color: "from-yellow-50 to-orange-50"
    },
    {
      icon: "🤖",
      title: "AI Integrations",
      description: "Integrating artificial intelligence capabilities into existing systems to enhance decision-making and efficiency",
      color: "from-blue-50 to-indigo-50"
    },
    {
      icon: "🛡️",
      title: "System Architecture",
      description: "Building robust, scalable systems that can handle complex business requirements and growing demands",
      color: "from-green-50 to-emerald-50"
    },
    {
      icon: "🔗",
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {expertise.map((item, index) => (
            <div key={index} className="card-hover group">
              <div className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-large transition-all duration-500 group-hover:-translate-y-2`}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-soft text-3xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Core Expertise Areas</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized skills and capabilities that drive successful automation solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Workflow Design", description: "Creating efficient, scalable automation workflows" },
              { title: "System Integration", description: "Connecting disparate systems seamlessly" },
              { title: "AI Implementation", description: "Integrating AI capabilities into business processes" }
            ].map((area, index) => (
              <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{area.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation",
      emoji: "⚡",
      skills: ["n8n", "Zapier", "Make"],
      description: "Workflow automation platforms",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "AI",
      emoji: "🤖",
      skills: ["OpenAI", "Gemini", "Dialogflow CX", "Windsurf", "Claude Code"],
      description: "Artificial intelligence tools",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "Platforms",
      emoji: "🌐",
      skills: ["Bubble.io", "Cognito Forms", "Google Workspace", "Caspio", "Lovable"],
      description: "Development platforms",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Integration",
      emoji: "🔗",
      skills: ["REST APIs", "Webhooks", "JSON"],
      description: "Integration technologies",
      gradient: "from-purple-400 to-pink-500"
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-container container-padding">
        <div className="text-center mb-12">
          <h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Skills & Tools
          </h2>
          <div className="accent-line mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive toolkit for building powerful automation and AI solutions that drive business transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl text-white text-2xl mb-4`}>
                  {category.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gray-50 dark:bg-gray-700 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Architecture = () => {
  const principles = [
    {
      icon: "⚡",
      title: "Event-Driven Automation",
      description: "Systems that respond intelligently to business events in real-time",
      gradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: "💻",
      title: "API-First Architecture",
      description: "Building with interoperability and future integrations in mind",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: "🧠",
      title: "AI-Assisted Workflows",
      description: "Leveraging artificial intelligence to enhance decision-making and efficiency",
      gradient: "from-green-50 to-emerald-50"
    },
    {
      icon: "🔒",
      title: "Security-Focused Integrations",
      description: "Prioritizing data protection and compliance in every connection",
      gradient: "from-purple-50 to-pink-50"
    },
    {
      icon: "🛡️",
      title: "Low-Code + Custom API Hybrid",
      description: "Combining rapid development with powerful custom solutions",
      gradient: "from-gray-50 to-slate-50"
    }
  ]

  const architectureLayers = [
    { 
      icon: "🗄️", 
      title: "Data Sources", 
      items: ["Forms", "APIs", "Webhooks"],
      color: "from-blue-400 to-blue-600"
    },
    { 
      icon: "⚙️", 
      title: "Automation Layer", 
      items: ["n8n/Zapier", "AI Processing", "Logic Engine"],
      color: "from-green-400 to-green-600"
    },
    { 
      icon: "☁️", 
      title: "Output Systems", 
      items: ["Databases", "Notifications", "Reports"],
      color: "from-purple-400 to-purple-600"
    }
  ]

  return (
    <section id="architecture" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-container container-padding">
        <div className="text-center mb-12">
          <h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Architecture Philosophy
          </h2>
          <div className="accent-line mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Building systems that are not just automated, but intelligent, secure, and scalable for long-term success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {principles.map((principle, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${principle.gradient} rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-large transition-all duration-500 group-hover:-translate-y-2`}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-soft text-3xl">
                    {principle.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{principle.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 mb-12 border border-primary-200 dark:border-gray-600">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">System Architecture Overview</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A modular approach that allows for easy scaling, maintenance, and integration of new technologies
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
            {architectureLayers.map((layer, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-medium p-8 mb-6 hover:shadow-large transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${layer.color} rounded-2xl text-white text-3xl mb-4`}>
                      {layer.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{layer.title}</h4>
                  </div>
                  <div className="space-y-2">
                    {layer.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-50 dark:bg-gray-700 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {index < architectureLayers.length - 1 && (
                  <div className="hidden lg:block">
                    <div className="text-primary-600 dark:text-primary-400">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xs rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Flow</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Seamless data movement from input to output</p>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary-200 to-primary-600 dark:from-primary-700 dark:to-primary-400"></div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Processing</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Intelligent automation at every step</p>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary-600 to-primary-200 dark:from-primary-400 dark:to-primary-700"></div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Delivery</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Actionable insights and results</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
              ⚡
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Scalable Design</h4>
            <p className="text-gray-600 dark:text-gray-300">Architecture that grows with your business needs</p>
          </div>
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
              🛡️
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Enterprise Security</h4>
            <p className="text-gray-600 dark:text-gray-300">Built-in security best practices at every layer</p>
          </div>
          <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
              🧠
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI-Enhanced</h4>
            <p className="text-gray-600 dark:text-gray-300">Intelligent automation that learns and improves</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const CaseStudyModal = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-5xl max-h-[90vh] overflow-y-auto w-full shadow-large border border-gray-200 dark:border-gray-700">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-8 flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">{caseStudy.title}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">{caseStudy.shortDescription}</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-colors ml-6"
          >
            <span className="text-2xl text-gray-900 dark:text-white">✕</span>
          </button>
        </div>

        <div className="p-8 space-y-12 bg-white dark:bg-gray-900">
          {/* Overview */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Overview</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{caseStudy.overview}</p>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Architecture</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{caseStudy.architecture.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.architecture.components.map((component, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                    <span className="text-2xl">✓</span>
                    <span className="font-medium text-gray-900 dark:text-white">{component}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Implementation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.images.map((image, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600">
                  <div className="rounded-xl mb-4 overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{image.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{image.alt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Breakdown */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Technical Breakdown</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600">
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                  <span className="text-2xl">📈</span>
                  Challenge
                </h4>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">{caseStudy.technicalBreakdown.challenge}</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600">
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                  <span className="text-2xl">⭐</span>
                  Solution
                </h4>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">{caseStudy.technicalBreakdown.solution}</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-600">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                  <span className="text-2xl">⚙️</span>
                  Implementation Details
                </h4>
                <ul className="space-y-3">
                  {caseStudy.technicalBreakdown.implementation.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-2xl">→</span>
                      <span className="leading-relaxed text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tools Used */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Tools Used</h3>
            <div className="flex flex-wrap gap-3">
              {caseStudy.toolsUsed.map((tool, index) => (
                <span
                  key={index}
                  className="bg-primary-100 dark:bg-blue-900 text-primary-800 dark:text-blue-200 px-4 py-2 rounded-xl font-medium border border-primary-200 dark:border-blue-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Impact & Results</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {caseStudy.impact.metrics.map((metric, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏆</span>
                      <span className="font-bold text-gray-900 dark:text-white">{metric}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">{caseStudy.impact.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CaseStudies = ({ selectedCaseStudy, setSelectedCaseStudy }) => {
  const caseStudies = [
    {
      id: 1,
      title: "Secure Lead Intake Integration",
      shortDescription: "Bubble.io + Cognito Forms integration for secure client intake workflows.",
      overview: "A comprehensive solution that automates the client intake process from initial contact to data storage, ensuring security and compliance while maintaining a seamless user experience.",
      architecture: {
        description: "Multi-layered architecture connecting web forms to Bubble.io backend with secure data transmission and validation.",
        components: [
          "Cognito Forms for secure data collection",
          "Custom API endpoints in Bubble.io",
          "Automated data validation and sanitization",
          "Secure webhook-based data transmission",
          "Client dashboard for intake tracking"
        ]
      },
      images: [
        {
          src: "/secure-lead-intake-diagram.png",
          alt: "Secure Lead Intake Integration Architecture Diagram",
          title: "System Architecture"
        },
        {
          src: "/placeholder-workflow-1.png",
          alt: "Lead Intake Workflow Screenshot",
          title: "Workflow Implementation"
        }
      ],
      technicalBreakdown: {
        challenge: "Manual lead processing was causing delays and potential data security issues in client intake workflows.",
        solution: "Implemented an automated system that securely captures form submissions, validates data, and stores it in a centralized Bubble.io application with real-time processing.",
        implementation: [
          "Created custom form validation rules in Cognito Forms",
          "Developed secure API endpoints in Bubble.io with authentication",
          "Implemented webhook-based real-time data synchronization",
          "Added automated email notifications for team members",
          "Built client-facing dashboard for submission tracking"
        ]
      },
      toolsUsed: ["Cognito Forms", "Bubble.io", "REST APIs", "Webhooks", "JSON"],
      impact: {
        metrics: [
          "95% reduction in data entry time",
          "100% elimination of manual processing errors",
          "3x faster client onboarding",
          "Enhanced data security and compliance"
        ],
        description: "Transformed a manual, error-prone process into a streamlined, secure workflow that significantly improved operational efficiency and client experience."
      }
    },
    {
      id: 2,
      title: "Automated Legal Billing Engine",
      shortDescription: "Google Apps Script automation converting CSV time tracking exports into client-ready invoices.",
      overview: "An intelligent automation system that transforms time tracking data into professional invoices, reducing billing preparation time from hours to minutes while ensuring accuracy.",
      architecture: {
        description: "Serverless automation using Google Apps Script with intelligent data parsing and template-based invoice generation.",
        components: [
          "CSV parsing and validation engine",
          "Time entry categorization algorithm",
          "Dynamic invoice template system",
          "Automated PDF generation",
          "Google Drive integration for storage"
        ]
      },
      images: [
        {
          src: "/placeholder-architecture-2.png",
          alt: "Billing Engine Architecture Diagram",
          title: "System Architecture"
        },
        {
          src: "/placeholder-workflow-2.png",
          alt: "Invoice Generation Workflow",
          title: "Workflow Implementation"
        }
      ],
      technicalBreakdown: {
        challenge: "Law firm was spending 8-10 hours monthly manually converting time tracking data into invoices, with frequent errors and inconsistencies.",
        solution: "Built an automated system that intelligently parses CSV exports, categorizes time entries, applies billing rates, and generates professional invoices automatically.",
        implementation: [
          "Developed intelligent CSV parsing with error handling",
          "Created rate calculation engine with multiple billing tiers",
          "Implemented template-based invoice generation",
          "Added automated quality checks and validations",
          "Integrated with Google Drive for document management"
        ]
      },
      toolsUsed: ["Google Apps Script", "Google Sheets", "Google Drive", "PDF Generation", "CSV Processing"],
      impact: {
        metrics: [
          "90% reduction in billing preparation time",
          "100% elimination of calculation errors",
          "Improved cash flow with faster invoicing",
          "Enhanced client satisfaction with detailed invoices"
        ],
        description: "Revolutionized the billing process, enabling the firm to focus on client service rather than administrative tasks while improving accuracy and cash flow."
      }
    },
    {
      id: 3,
      title: "AI-Powered Legal Operations Assistant",
      shortDescription: "Google Chat assistant powered by Dialogflow CX, integrated with Bubble Data API and RAG retrieval layer.",
      overview: "Deployed a Google Chat assistant powered by Dialogflow CX, integrated with Bubble Data API and a RAG retrieval layer. The assistant can query both relational client data and company SOPs/policy documents stored in Google Cloud Storage, providing real-time, conversational answers while respecting field-level privacy rules.",
      architecture: {
        description: "Hybrid AI architecture combining Dialogflow CX for natural language processing with Bubble Data API integration and RAG system for document retrieval.",
        components: [
          "Dialogflow CX for intent recognition and conversation management",
          "Bubble Data API for relational client data access",
          "RAG retrieval layer for SOPs and policy documents",
          "Google Cloud Storage for document storage",
          "Google Chat interface",
          "Field-level privacy rules enforcement"
        ]
      },
      images: [
        {
          src: "/ai-powered-legal-operations-assistant.png",
          alt: "AI-Powered Legal Operations Assistant Architecture Diagram",
          title: "System Architecture"
        },
        {
          src: "/placeholder-workflow-3.png",
          alt: "Chat Bot Workflow Implementation",
          title: "Workflow Implementation"
        }
      ],
      technicalBreakdown: {
        challenge: "Legal team needed quick access to both client data and company policies without navigating multiple systems, while maintaining strict privacy controls.",
        solution: "Created an AI-powered chat assistant with direct API integration that queries relational data and retrieves policy documents using RAG, all through a conversational interface with enforced privacy rules.",
        implementation: [
          "Direct API integration without third-party workflow tools",
          "Conversational interface to access internal client and policy data",
          "RAG system for accurate retrieval of SOPs and policies from Google Cloud Storage",
          "Field-level privacy rules to secure sensitive client information",
          "Real-time data retrieval and context-aware responses"
        ]
      },
      toolsUsed: ["Dialogflow CX", "Google Chat", "Bubble Data API", "RAG", "Google Cloud Storage", "REST APIs"],
      impact: {
        metrics: [
          "Direct API integration with no third-party workflow dependencies",
          "Real-time access to client data and company policies",
          "Accurate document retrieval through RAG system",
          "Enhanced security with field-level privacy enforcement"
        ],
        description: "Transformed how the legal team accesses information by providing a conversational interface that securely queries both structured client data and unstructured policy documents, maintaining strict privacy controls while delivering instant answers."
      }
    },
    {
      id: 4,
      title: "AI Lead Qualification Automation",
      shortDescription: "AI workflow using Cognito Forms, n8n, and Gemini to classify website inquiries.",
      overview: "An intelligent lead qualification system that automatically categorizes and routes incoming inquiries, ensuring high-priority leads receive immediate attention while maintaining detailed tracking.",
      architecture: {
        description: "AI-powered workflow automation combining form submissions, machine learning classification, and intelligent routing.",
        components: [
          "Cognito Forms for lead capture",
          "n8n workflow orchestration",
          "Gemini AI for lead classification",
          "Automated routing and notifications",
          "CRM integration for tracking"
        ]
      },
      images: [
        {
          src: "/placeholder-architecture-4.png",
          alt: "Lead Qualification System Architecture",
          title: "System Architecture"
        },
        {
          src: "/placeholder-workflow-4.png",
          alt: "AI Classification Workflow",
          title: "Workflow Implementation"
        }
      ],
      technicalBreakdown: {
        challenge: "Sales team was spending hours manually reviewing and categorizing incoming leads, resulting in delayed follow-up on high-priority opportunities.",
        solution: "Implemented an AI-powered system that automatically classifies leads based on content, urgency, and potential value, then routes them appropriately.",
        implementation: [
          "Created custom form fields for better lead data capture",
          "Integrated Gemini AI for intelligent lead scoring",
          "Built automated workflows in n8n for processing",
          "Implemented priority-based routing system",
          "Added real-time notifications and dashboard"
        ]
      },
      toolsUsed: ["Cognito Forms", "n8n", "Gemini AI", "REST APIs", "Machine Learning"],
      impact: {
        metrics: [
          "85% reduction in lead processing time",
          "40% increase in lead conversion rate",
          "Immediate response to high-priority leads",
          "Improved sales team productivity"
        ],
        description: "Revolutionized the lead management process, enabling the sales team to focus on high-value opportunities while ensuring no lead falls through the cracks."
      }
    }
  ]

  return (
    <section id="case-studies" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-container container-padding">
        <div className="text-center mb-12">
          <h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Case Studies
          </h2>
          <div className="accent-line mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real-world implementations demonstrating the power of automation and AI to transform business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 group cursor-pointer p-8 border border-gray-200 dark:border-gray-700"
              onClick={() => setSelectedCaseStudy(caseStudy)}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                  Case Study
                </span>
                <span className="text-gray-400 dark:text-gray-500 text-sm">
                  #{caseStudy.id}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {caseStudy.shortDescription}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {caseStudy.toolsUsed.slice(0, 3).map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                  {caseStudy.toolsUsed.length > 3 && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-3 py-1 rounded-lg text-sm">
                      +{caseStudy.toolsUsed.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                  <span className="font-medium">View Details</span>
                  <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in learning how these solutions can be adapted for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-3 text-lg px-8 py-4">
              <span>📧</span>
              Discuss Your Project
            </a>
            <a href="https://www.linkedin.com/in/dondonlongcanaya/" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-3 text-lg px-8 py-4">
              <span>💼</span>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <CaseStudyModal 
        caseStudy={selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
      />
    </section>
  )
}

const Contact = () => {
  const contactMethods = [
    {
      icon: "✉️",
      label: "Email",
      value: "don.longcanaya@gmail.com",
      href: "mailto:don.longcanaya@gmail.com",
      description: "For project inquiries and collaborations",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: "💼",
      label: "LinkedIn", 
      value: "linkedin.com/in/dondonlongcanaya",
      href: "https://www.linkedin.com/in/dondonlongcanaya/",
      description: "Professional network and updates",
      gradient: "from-green-50 to-emerald-50"
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/dondonl",
      href: "https://github.com/dondonl",
      description: "Open source projects and contributions",
      gradient: "from-purple-50 to-pink-50"
    }
  ]

  const contactInfo = [
    {
      icon: "📞",
      text: "Available for calls by appointment"
    },
    {
      icon: "📍",
      text: "Remote support available globally"
    },
    {
      icon: "⏰",
      text: "Typically respond within 24 hours"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-container container-padding">
        <div className="text-center mb-12">
          <h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In Touch
          </h2>
          <div className="accent-line mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Let's discuss how automation and AI can transform your business operations and drive meaningful results
          </p>
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 dark:from-primary-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-12 mb-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="text-6xl mb-6">📧</div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Streamline Your Operations?
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Whether you're looking to automate specific workflows, integrate AI capabilities, 
              or build custom automation systems, I'm here to help you achieve your goals efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:don.longcanaya@gmail.com" className="btn-primary flex items-center justify-center gap-3 text-lg px-8 py-4">
                ✉️ Send Message
              </a>
              <a href="https://www.linkedin.com/in/dondonlongcanaya/" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-3 text-lg px-8 py-4">
                💼 Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-soft text-2xl">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      label: "Email",
      href: "mailto:don.longcanaya@gmail.com",
      icon: "✉️"
    },
    {
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/dondonlongcanaya/",
      icon: "💼"
    },
    {
      label: "GitHub",
      href: "https://github.com/dondonl", 
      icon: "💻"
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden footer-text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="relative z-10 section-padding">
        <div className="max-container container-padding">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="footer-name-text">Dondon Longcanaya</span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Automation & AI Systems Engineer specializing in workflow optimization, 
                AI integrations, and custom automation solutions.
              </p>
              <div className="flex gap-4">
                {footerLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Architecture
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:don.longcanaya@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                    don.longcanaya@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/dondonlongcanaya/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <a href="https://github.com/dondonl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                    GitHub Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                className="text-gray-400 text-sm flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
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
          </div>

          {/* Back to Top */}
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
        </div>
      </div>
    </footer>
  )
}

const App = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ThemeToggle />
      <Hero />
      <About />
      <Architecture />
      <Skills />
      <CaseStudies 
        selectedCaseStudy={selectedCaseStudy}
        setSelectedCaseStudy={setSelectedCaseStudy}
      />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
