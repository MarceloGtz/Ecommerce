import { useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const purchases = useSelector(state => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  return (
    <div>
      <h1>My Purchases</h1>
      <ListGroup>
        {purchases.map(purchase => (
          <ListGroup.Item
            key={purchase.cartId}
            onClick={() => navigate(`/product/${purchase.id}`)}
          >
            <p>
              Cart #{purchase.cartId} <span>{purchase.cart.status}</span>
            </p>
            {/* PRODUCTOS DE CADA CARRITO */}
            <ListGroup>
              {purchase.cart.products.map(product => (
                <ListGroup.Item key={product.id}>
                  <p>Name: {product.title}</p>
                  <p>Price: {product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Total: {product.price + product.quantity}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Purchases;
