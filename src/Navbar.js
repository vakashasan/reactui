import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
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
                <Nav className="justify-content-center flex-grow-1 m-5 navbar-dark">
                  <Nav.Link href="#action1">Community</Nav.Link>
                  <Nav.Link href="#action2">Portfolio</Nav.Link>
                  <Nav.Link href="#action2">Jobs</Nav.Link>
                  <Nav.Link href="#action2">Location</Nav.Link>
                  <Nav.Link href="#action2">Network</Nav.Link>
                  <Nav.Link href="#action2">Links</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;