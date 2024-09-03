import { AnimatePresence, motion } from 'framer-motion'
import HeroButton from './components/HeroButton'

function HomePage() {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 72,
        },
        visible: { opacity: 1, y: 0, scale: [1.1, 1] },
      }}
      initial="hidden"
      animate="visible"
      exit={{
        opacity: 0,
        y: -72,
      }}
      className="max-h-screen h-[600px] w-full flex flex-col items-center justify-center"
    >
      <motion.div
        transition={{
          type: 'spring',
        }}
        className=" whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 "
      >
        PARITOSH KUMAR JHA
      </motion.div>

      <motion.div className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-center mt-4 ">
        <p>
          Turning Ideas into Reality— One Line of Code at a Time. I’m a software
          developer with a passion for{' '}
          <span className="font-bold text-white">Flutter</span> and the{' '}
          <span className="font-bold text-white">MERN Stack</span>. I love
          crafting apps that connect, engage, and inspire.
        </p>
      </motion.div>
      <HeroButton label={'Know more'} />
    </motion.div>
  )
}

export default HomePage
