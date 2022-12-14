import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.products);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  // Set Filtered Products by id
  const filterCategory = categoryId => {
    const filtered = products.filter(
      product => product.category.id === categoryId
    );
    setFilteredProducts(filtered);
  };

  // Search product
  const searchProduct = () => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
    setSearchValue('');
  };

  // GET products and categories
  useEffect(() => {
    axios
      .get(
        'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
      )
      .then(res => setCategories(res.data));
    dispatch(getProductsThunk());
  }, []);

  // Set products filtered by id
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <Row>
      {/* SEARCH */}
      <Col>
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder='Search product...'
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
            onChange={e => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <Button onClick={searchProduct}>Search</Button>
        </InputGroup>
      </Col>
      {/* CATEGORIES */}
      <Col sm={4}>
        <ListGroup>
          {categories.data?.categories.map(category => (
            <ListGroup.Item
              style={{ cursor: 'pointer' }}
              key={category.id}
              onClick={() => filterCategory(category.id)}
            >
              {category.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      {/* PRODUCTS */}
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className='g-3'>
        {filteredProducts.map(product => (
          <Col key={product.id}>
            <Card
              className='border'
              style={{ height: '100%', cursor: 'pointer' }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <Card.Img
                className='img-fluid'
                variant='top'
                src={product.productImgs[0]}
                alt={product.title}
                style={{ height: '150px' }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button
                  className='d-block'
                  type='button'
                  size='sm'
                  variant='primary'
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Row>
  );
};

export default Home;
