import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  const productsList = useSelector(state => state.products);

  const productDetail = productsList.find(product => product.id === Number(id));

  const relatedProducts = productsList.filter(
    product => product.category.id === productDetail.category.id
  );

  console.log(relatedProducts);

  return (
    <Row>
      <Col>
        <img
          src={productDetail?.productImgs[0]}
          alt={productDetail?.title}
          className='img-fluid'
        />
        <h2>{productDetail?.title}</h2>
        <p>{productDetail?.description}</p>
        <p>Price: ${productDetail?.price}</p>
        <Button variant='primary'>Add to cart</Button>
      </Col>
      <Col lg={4}>
        <h2>Discover similar items</h2>
        <ListGroup>
          {relatedProducts?.map(product => (
            <ListGroup.Item key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  className='img-fluid'
                  src={product.productImgs[0]}
                  alt={product.title}
                />
                <p>{product.title}</p>
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ProductDetail;
