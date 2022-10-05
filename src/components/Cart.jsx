import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { getCartThunk } from '../store/slices/cart.slice';

const Cart = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  return (
    <Offcanvas show={show} onHide={handleClose} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
