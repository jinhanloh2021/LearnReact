import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { productId } = useParams(); //gets the productId from the URL
  return (
    <section className="section product">
      <h4>{productId}</h4>
      <Link to="/products" className="btn">
        Back to product
      </Link>
    </section>
  );
};

export default SingleProduct;
