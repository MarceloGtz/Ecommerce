import React, { useEffect } from 'react';
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { getCartThunk } from '../store/slices/cart.slice';

const Cart = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  console.log(cart);

  return (
    <Offcanvas show={show} onHide={handleClose} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup>
          {cart.map(product => (
            <ListGroup.Item key={product.id}>
              <Link to={`/product/${product.productsInCart.productId}`}>
                <p>Brand: {product.brand}</p>
                <p>Product Name: {product.title}</p>
                <p>Quantity: {product.productsInCart.quantity}</p>
                <p>${product.price}</p>
                <p>Total: ${product.productsInCart.quantity * product.price}</p>
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
