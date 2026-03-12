import { ArrowDown, Mail, Briefcase, Sparkles } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      <div className="relative z-10 max-container container-padding">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary-200 dark:border-primary-700">
            <Sparkles size={16} />
            Automation & AI Systems Engineer
          </div>
          
          {/* Main heading */}
          <h1 className="heading-gradient text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-normal pb-2">
            Dondon Longcanaya
          </h1>
          
          {/* Tagline */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto font-medium">
              I design automation systems, AI workflows, and integrations that streamline complex business operations.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('case-studies')}
              className="btn-primary flex items-center justify-center gap-3 text-lg px-8 py-4"
            >
              <Briefcase size={20} />
              View Case Studies
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary flex items-center justify-center gap-3 text-lg px-8 py-4"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scroll to explore</span>
            <ArrowDown size={20} className="text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
