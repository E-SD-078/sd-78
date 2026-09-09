import Header from './Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
const ProductItem = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  console.log(slug);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/slug/${slug}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  return (
    <>
      <Header />
      {product && (
        <div>
          <h2>{product.title}</h2>
          {product.images.map((image, index) => (
            <img src={image} key={index} />
          ))}
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      )}
    </>
  );
};
export default ProductItem;
