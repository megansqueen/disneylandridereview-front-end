import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from '../../node_modules/react-bootstrap/Nav';
import Navbar from '../../node_modules/react-bootstrap/Navbar';
import NavDropdown from '../../node_modules/react-bootstrap/NavDropdown';
import Offcanvas from '../../node_modules/react-bootstrap/Offcanvas';
import '../App.css';

function NavBar() {

    return (
        <div >
        {['md'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="NavBar">
            <Container fluid>
              <Navbar.Brand fontFamily='WaltographRegular'href="/">Disney Ride Reviews</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/createride">Add Ride</Nav.Link>
                    <NavDropdown
                      title="See More"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/matchpage">My Reviews</NavDropdown.Item>
                      <NavDropdown.Item href="/learnmore">
                        Learn More
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div> 
    )
}

export default NavBar;