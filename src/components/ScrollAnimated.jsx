import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ScrollAnimated = ({ 
  children, 
  variants = 'fadeInUp', 
  delay = 0, 
  duration = 0.6, 
  threshold = 0.1,
  className = '' 
}) => {
  const { controls } = useScrollAnimation(threshold)

  const animationVariants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={controls.ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants[variants]}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimated
