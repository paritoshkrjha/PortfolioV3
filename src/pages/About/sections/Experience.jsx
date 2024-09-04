import ExperienceItem from '../components/ExperienceItem'

function Experience() {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-white">My Experience.</h1>
      <ul className="mt-6">
        <ExperienceItem
          position={'Software Developer Intern'}
          company={'SixSense Mobility'}
          duration={'August, 2023 - April, 2024'}
          location={'Delhi, India'}
          roleDescription={
            'At SixSense Mobility, I contributed to the development of a QR-based system for vehicle information access, enhancing emergency response capabilities.My contributions included:'
          }
          keyPts={[
            {
              title: 'Cross-Platform Development',
              description:
                'Designed and developed a QR-based system that streamlined vehicle information access, ensuring compatibility across multiple platforms.',
            },
            {
              title: 'User Engagement',
              description:
                'Worked collaboratively with the team to transform ideas into functional mobile apps, enhancing user experience and engagement.',
            },
            {
              title: 'App Enhancements',
              description:
                'Proposed and implemented app improvements that led to markedly improved user satisfaction and functionality.',
            },
            {
              title: 'Technical Skills',
              description:
                'Leveraged my expertise in Flutter to deliver high-quality, responsive, and secure mobile applications.',
            },
          ]}
        />
      </ul>
    </div>
  )
}

export default Experience
