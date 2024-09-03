import { NavLink } from 'react-router-dom'
import Container from '../Container'
import { motion } from 'framer-motion'

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
            ? 'px-4 py-2 text-sm  rounded bg-white text-black font-bold'
            : 'px-4 py-2 text-sm text-white font-semibold rounded hover:bg-white hover:text-black'
        }
      >
        {label}
      </NavLink>
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
          <NavItem label={'Contact'} path={'/contact'} />
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default Navbar
