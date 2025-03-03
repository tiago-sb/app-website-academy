import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const NavBar = () => {
  return (
    <Navbar style={{ fontFamily: 'Poppins, sans-serif'}} collapseOnSelect fixed="top"
      expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Sobre" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Instrutores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Preço
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Agenda</Nav.Link>
            <Nav.Link href="#pricing">Contato</Nav.Link>
          </Nav>
          <Nav.Link style={{ margin: 5}} 
            href="https://www.instagram.com/tiagobella.05/" target="_blank">
            <FaInstagram size={24} />
          </Nav.Link>
          <Nav.Link style={{ margin: 5}} 
            href="https://github.com/tiago-sb" target="_blank">
            <FaGithub size={24} />
          </Nav.Link>
          <Nav.Link style={{ margin: 5}} 
            href="https://www.linkedin.com/in/tiago-bela-215103238/" target="_blank">
            <FaLinkedin size={24} />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar