import CardWidge from '../CardWidget/CardWidge'
import Logo from '../Logo/Logo'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
  
  <>
    <Logo/>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">CALLERAS Y POUCH</Nav.Link>
            <Nav.Link href="#features">CALZAS</Nav.Link>
            <Nav.Link href="#pricing">REMERAS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CardWidge/>
      </Container>
    </Navbar>
  </>  
  )
}

export default NavBar
