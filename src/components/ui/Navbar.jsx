import { NavLink } from 'react-router-dom'
import { FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

import Container from '../Container'

function NavItem({ label, path }) {
  return (
    <motion.div
      variants={{
        hidden: {
          y: -40,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? 'px-4 py-2 text-sm rounded bg-white text-black font-bold'
            : 'px-4 py-2 text-sm text-white font-semibold rounded hover:bg-white hover:text-black'
        }
      >
        {label}
      </NavLink>
    </motion.div>
  )
}

function ResumeButton() {
  return (
    <motion.div
      variants={{
        hidden: {
          y: -40,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
    >
      <a
        href="https://drive.google.com/file/d/1LUIpSsSbEtQme9SV9qfL6SKm82TXpZPS/view?usp=drive_link"
        target="_blank"
      >
        <button className="cursor-pointer border-white border-2 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-pulse hover:animate-none ">
          <div className="flex items-center gap-2">
            <p>Resume</p>
            <FiExternalLink />
          </div>
        </button>
      </a>
    </motion.div>
  )
}

function Navbar() {
  return (
    <Container>
      <motion.div
        variants={{
          hidden: {
            y: -40,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className="flex items-center justify-between"
      >
        <NavLink to="/">
          <p className="font-logo text-white text-4xl text-center">Pk.</p>
        </NavLink>
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex items-center justify-center lg:gap-x-8 md:gap-x-4 sm:gap-x-2 gap-x-1"
        >
          <NavItem label={'About'} path={'/about'} />
          <NavItem label={'Projects'} path={'/projects'} />
          <ResumeButton />
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default Navbar
