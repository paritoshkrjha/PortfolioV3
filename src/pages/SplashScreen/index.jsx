import { motion } from 'framer-motion'
import SplashText from './components/SplashText'
import Divider from './components/Divider'

function SplashScreen() {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          y: '-100%',
        }}
        transition={{
          delay: 2,
          duration: 0.8,
          ease: 'easeIn',
        }}
        className="absolute top-0 left-0 h-[55%] w-full bg-black flex flex-col justify-end items-center"
      >
        <SplashText />
        <Divider />
      </motion.div>
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          y: '100%',
        }}
        transition={{
          delay: 2,
          duration: 0.8,
          ease: 'easeIn',
        }}
        className="absolute bottom-0 left-0 h-[45%] w-full bg-black text-white"
      />
    </div>
  )
}

export default SplashScreen
