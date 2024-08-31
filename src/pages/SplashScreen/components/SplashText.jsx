import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

const HELLOS = [
  'Hello!', // English
  'Hola!', // Spanish
  'Bonjour!', // French
  'Ciao!', // Italian
  'Olá!', // Portuguese
  'Namaste!', // Hindi
  'Konnichiwa!', // Japanese
  'Salam!', // Arabic (used across many regions)
  'Ni hao!',
]

function SplashText() {
  const greeting = getRandomGreeting().split('')
  const [scope, animate] = useAnimate()

  function getRandomGreeting() {
    return HELLOS[Math.floor(Math.random() * HELLOS.length)]
  }

  useEffect(() => {
    animate(
      'li',
      {
        y: [30, 0],
        opacity: [0, 1],
      },
      {
        type: 'spring',
        stiffness: 100,
        duration: 1,
        delay: stagger(0.1),
      }
    )
  }, [])

  return (
    <motion.ul
      ref={scope}
      className="flex text-white text-7xl font-extrabold font-dm-sans"
    >
      {greeting.map((letter, index) => (
        <li key={index}>{letter}</li>
      ))}
    </motion.ul>
  )
}

export default SplashText
