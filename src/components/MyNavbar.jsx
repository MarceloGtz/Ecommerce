import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <>
      {['md'].map(expand => (
        <Navbar key={expand} bg='light' expand={expand} className='mb-3'>
          <Container fluid>
            {/* ----- NAVBAR TITLE OUTSIDE ----- */}
            <Navbar.Brand as={Link} to={'/'}>
              e-commerce
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                {/* ----- NAVBAR TITLE INSIDE ----- */}
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  e-commerce
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* ----- LINKS ----- */}
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link as={Link} to={'/'}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/login'}>
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/purchases'}>
                    Purchases
                  </Nav.Link>
                  {/* ----- CART MODAL ----- */}
                  <Nav.Link onClick={() => alert('Modal Cart')}>Cart</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default MyNavbar;
