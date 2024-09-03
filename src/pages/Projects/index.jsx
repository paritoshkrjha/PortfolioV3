import React from 'react'

import Heading from '../../components/Heading'
import ProjectCard from './components/ProjectCard'
import AnimatedButton from '../../components/ui/AnimatedButton'

function Projects() {
  return (
    <>
      <Heading label="My Projects." />
      <div className=" mt-5 flex flex-col gap-y-5">
        <ProjectCard
          title={'Yumster'}
          description={
            ' A social recipe sharing app to connect foodies and explore new dishes.'
          }
          githubUrl={'https://github.com/orgs/PrepFront/repositories'}
          techStack={['Flutter', 'MERN', 'JWT-Auth', 'Google Gemini']}
        />
        <ProjectCard
          title={'JobCadet'}
          description={
            'A full stack Web Application to share resources and scheduling DCS and personal mentoring sessions from the app.'
          }
          githubUrl={'https://github.com/paritoshkrjha/Yumster'}
          projectUrl={'https://jobcadet.com/'}
          techStack={['HTML', 'Tailwind CSS', 'MERN Stack']}
        />
        <ProjectCard
          title={'Eyemate'}
          description={
            ' An eye pleasing, easy to navigate and a minimal OTT platform responsive redesign'
          }
          projectUrl="https://eyemate.netlify.app/"
          githubUrl={'https://github.com/paritoshkrjha/eyemate'}
          techStack={['HTML', 'Tailwind CSS', 'ReactJs']}
        />
      </div>
      <div className="m-8">
        <AnimatedButton
          label={'View my Resume'}
          to="https://drive.google.com/file/d/1LUIpSsSbEtQme9SV9qfL6SKm82TXpZPS/view?usp=drive_link"
        />
      </div>
    </>
  )
}

export default Projects
