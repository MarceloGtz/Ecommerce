import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';

const MyNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('token', '');
    navigate('/login');
  };

  return (
    <>
      {['sm'].map(expand => (
        <Navbar key={expand} bg='light' expand={expand} className='mb-3'>
          <Container>
            {/* ----- NAVBAR TITLE OUTSIDE ----- */}
            <Navbar.Brand as={Link} to={'/'}>
              E-commerce
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
                  E-commerce
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
                  <Nav.Link onClick={handleShow}>Cart</Nav.Link>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Cart show={show} handleClose={handleClose} />
    </>
  );
};

export default MyNavbar;
