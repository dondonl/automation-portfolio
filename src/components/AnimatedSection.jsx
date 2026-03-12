import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AnimatedSection = ({ 
  children, 
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1 
}) => {
  const { controls } = useScrollAnimation(threshold)

  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    }
  }

  return (
    <motion.section
      ref={controls.ref}
      initial="hidden"
      animate={controls}
      variants={variants[animation]}
      className={className}
    >
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: delay
            }
          }
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  )
}

export default AnimatedSection
