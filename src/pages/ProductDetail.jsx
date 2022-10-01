import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  const productsList = useSelector(state => state.products);

  const productDetail = productsList.find(product => product.id === Number(id));

  const relatedProducts = productsList.filter(
    product => product.category.id === productDetail.category.id
  );

  return (
    <div>
      <h1>Product Detail: {productDetail?.id}</h1>
      <img
        src={productDetail?.productImgs[0]}
        alt={productDetail?.title}
        style={{ width: '200px', height: '160px' }}
      />
      <h2>{productDetail?.title}</h2>
      <p>{productDetail?.description}</p>
      <p>Price: ${productDetail?.price}</p>
      <Button variant='danger'>Add to cart</Button>
      <br />
      <hr />
      <br />
      <h2>Discover similar items</h2>
      <ul>
        {relatedProducts?.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
