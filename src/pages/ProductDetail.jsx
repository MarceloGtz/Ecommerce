import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const productsList = useSelector(state => state.products);
  const productDetail = productsList.find(product => product.id === Number(id));

  console.log(productDetail);

  return (
    <div>
      <h1>Product Detail: {productDetail.id}</h1>
      <img
        src={productDetail.productImgs[0]}
        alt={productDetail.title}
        style={{ width: '200px', height: '160px' }}
      />
      <h2>{productDetail.title}</h2>
      <p>{productDetail.description}</p>
      <p>Price: ${productDetail.price}</p>
      <Button variant='danger'>Add to cart</Button>
    </div>
  );
};

export default ProductDetail;
