import { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <div>
      <h1>Componente Home</h1>
      <Row xs={1} md={3} lg={4} xl={5} xxl={6} className='g-4'>
        {products.map(product => (
          <Col key={product.id}>
            <Card
              className='border p-3 mb-5'
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <Card.Img
                variant='top'
                src={product.productImgs[0]}
                alt={product.title}
                style={{ width: '200px', height: '160px' }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant='danger'>Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
