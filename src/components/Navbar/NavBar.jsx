import {Link} from 'react-router-dom'
import CardWidge from '../CardWidget/CardWidge'
import Logo from '../Logo/Logo'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
  
  <>
    <Link to='/'>
      <Logo/>
    </Link>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/callerasypouch'>CALLERAS Y POUCH</Link>
            <Link to='/calzas'>CALZAS</Link>
            <Link to='/remeras'>REMERAS</Link>
          </Nav>
        </Navbar.Collapse>
        <CardWidge/>
      </Container>
    </Navbar>
  </>  
  )
}

export default NavBar
