import Heading from '../../components/Heading'
import AnimatedButton from '../../components/ui/AnimatedButton'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Intro from './sections/Intro'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
      variants={{
        hidden: {
          y: 40,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.2,
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="mt-4"
    >
      <Heading label="About Me." />
      <Intro />
      <Experience />
      <Education />
      <div className="m-8">
        <AnimatedButton label={'Know more about my Projects'} to="/projects" />
      </div>
    </motion.div>
  )
}

export default About
