import Heading from '../../components/Heading'
import AnimatedButton from '../../components/ui/AnimatedButton'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Intro from './sections/Intro'

function About() {
  return (
    <div className="mt-4">
      <Heading label="About Me." />
      <Intro />
      <Education />
      <Experience />
      <div className='m-8'>
        <AnimatedButton label={'Know more about my Projects'} to="/projects" />
      </div>
    </div>
  )
}

export default About
