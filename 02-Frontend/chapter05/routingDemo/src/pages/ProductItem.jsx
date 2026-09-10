import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
const ProductItem = () => {
  const params = useParams(); //useParams return object with the dynamic route as key and the value is what in the url of the browser
  const [product, setProduct] = useState(null);
  console.log(params);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/slug/${params.slug}`);
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
