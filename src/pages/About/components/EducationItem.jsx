import React from 'react'

function EducationItem({ heading, description, duration, location }) {
  return (
    <li>
      <div className="  flex md:flex-row flex-col-reverse md:items-center justify-between ">
        <h1 className="md:text-xl text-lg font-semibold text-white">
          {heading}
        </h1>
        <p className="text-gray-400 sm:text-base text-xs">{duration}</p>
      </div>
      <div className="flex md:flex-row flex-col md:items-center justify-between ">
        <p className="text-gray-400 sm:text-base text-sm">{description}</p>
        <p className="text-gray-400 sm:text-base text-sm">{location}</p>
      </div>
    </li>
  )
}

export default EducationItem
