import Container from '../Container'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return <Container>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/projects'>Projects</NavLink>
  </Container>
}

export default Navbar
