import { NavLink } from 'react-router-dom'
import Container from '../Container'

function NavItem({ label, path }) {
  return (
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
  )
}

function Navbar() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <NavLink to="/">
          {/* <img src={Logo} className="h-[50px]" /> */}
          <p className="font-logo text-white text-4xl text-center">Pk.</p>
        </NavLink>
        <div className="flex items-center justify-center lg:gap-x-8 md:gap-x-4 sm:gap-x-2 gap-x-1">
          <NavItem label={'About'} path={'/about'} />
          <NavItem label={'Projects'} path={'/projects'} />
          <NavItem label={'Contact'} path={'/contact'} />
        </div>
      </div>
    </Container>
  )
}

export default Navbar

{
  /* <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? 'px-4 py-2 text-sm  rounded bg-white text-black font-bold'
          : 'px-4 py-2 text-sm text-white font-semibold rounded hover:bg-white hover:text-black'
      }
    >
      {label}
    </NavLink> */
}
