import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = ({ navTitles, navLinks }) => {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {navTitles.map((title, index) => (
        <Nav.Link key={title} href="#" as="span">
          <Link to={navLinks[index]}>{title}</Link>
        </Nav.Link>      
      ))}
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}


export default NavigationBar;