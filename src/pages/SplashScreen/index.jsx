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
          y: '-55%',
          opacity: 0,
        }}
        transition={{
          delay: 2,
          duration: 0.8,
        }}
        className="absolute top-0 left-0 h-[55%] w-full bg-[#1a1a1a] flex flex-col justify-end items-center"
      >
        <SplashText />
        <Divider />
      </motion.div>
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          y: '45%',
          opacity: 0,
        }}
        transition={{
          delay: 2,
          duration: 0.8,
        }}
        className="absolute bottom-0 left-0 h-[45%] w-full bg-[#1a1a1a] text-white"
      />
    </div>
  )
}

export default SplashScreen
