import { useInView } from 'framer-motion'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation()
  const isInView = useInView({ threshold })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return { controls, isInView }
}

export const useScrollAnimationMultiple = (threshold = 0.1) => {
  const controls = useAnimation()
  const isInView = useInView({ threshold, amount: 'some' })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls])

  return { controls, isInView }
}
