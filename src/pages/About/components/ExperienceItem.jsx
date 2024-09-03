import React from 'react'
import { RiLink } from 'react-icons/ri'
function ExperienceItem({
  position,
  company,
  duration,
  location,
  roleDescription,
  keyPts,
}) {
  return (
    <li className="py-2">
      <div>
        <div className="flex sm:flex-row flex-col-reverse md:items-center justify-between ">
          <h1 className="md:text-xl text-lg font-semibold text-white">
            {position}
          </h1>
          <p className="text-gray-400 sm:text-base text-xs">{duration}</p>
        </div>
        <div className="flex sm:flex-row flex-col md:items-center justify-between ">
          <div className="flex items-center gap-x-1">
            <p className="text-gray-400 sm:text-base text-sm">{company}</p>
            <a href="https://www.sixsensemobility.com/home" target="_blank">
              <RiLink color="white" />
            </a>
          </div>
          <p className="text-gray-400 sm:text-base text-sm">{location}</p>
        </div>
      </div>
      <div className="mt-5 text-justify">
        <p className="text-gray-300 sm:text-base text-sm">{roleDescription}</p>
        <ul className="list-disc pl-4 py-2">
          {keyPts.map((keyPt, index) => (
            <li key={index} className="text-gray-300 py-1 sm:text-base text-sm">
              <span className="font-bold text-gray-200">{keyPt.title}</span> :{' '}
              {keyPt.description}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default ExperienceItem
