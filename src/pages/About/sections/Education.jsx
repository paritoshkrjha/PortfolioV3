import EducationItem from '../components/EducationItem'

function Education() {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-white">My Education.</h1>
      <ul className="mt-6 flex flex-col gap-4">
        <EducationItem
          heading={"Bharati Vidyapeeth's College of Engineering"}
          description={'B.Tech, Information Technology, CGPA: 8.99'}
          duration={'2020 - 2024'}
          location={'Delhi, India'}
        />
        <EducationItem
          heading={'St. Xavier School'}
          description={'Senior Secondary, Computer Science'}
          duration={'2017 - 2019'}
          location={'Delhi, India'}
        />
      </ul>
    </div>
  )
}

export default Education
