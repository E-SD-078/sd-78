import { useEffect } from 'react';

import { useState } from 'react';
import { Link } from 'react-router';
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <section className='grid grid-cols-3'>
        {products.map((product) => (
          <div key={product.id}>
            <Link className='text-blue-500' to={`/products/${product.slug}`}>
              {product.title}
            </Link>
            <img src={product.images[0]} alt='' width='100' />
          </div>
        ))}
      </section>
    </>
  );
};
export default Products;
