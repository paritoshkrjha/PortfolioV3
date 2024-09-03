import React, { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { CiFolderOn } from 'react-icons/ci'
import { PiGithubLogo } from 'react-icons/pi'
import { motion } from 'framer-motion'

function ProjectCard({
  title,
  description,
  projectUrl = '',
  githubUrl = '',
  techStack,
}) {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setGradientPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
      translate={{
        type: 'spring',
      }}
      className="relative px-4 py-6 rounded-md bg-[#212131]/60 backdrop-blur-sm overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(255, 255, 255, 0.1), transparent 20%)`,
          }}
        />
      )}
      <div className="relative z-10 flex justify-between items-center">
        <CiFolderOn size={40} color="white" />
        <div className="flex gap-x-3 cursor-pointer">
          {projectUrl.length !== 0 && (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <FiExternalLink size={24} color="gray" />
            </a>
          )}
          {githubUrl.length !== 0 && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <PiGithubLogo size={24} color="gray" />
            </a>
          )}
        </div>
      </div>
      <div className="relative z-10 mt-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <span key={index} className="text-sm text-gray-400">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
