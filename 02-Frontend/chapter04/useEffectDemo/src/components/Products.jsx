import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('This Will run one time only ComponentDidMount!');
    const getProductData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const productsData = await res.json();
        setProducts(productsData); //set the state to trigger reRender
        console.log(productsData);
      } catch (error) {
        console.error(error);
      }
    };
    getProductData();
  }, []);
  return (
    <section>
      {products.map((p) => (
        <ProductCard product={p} key={p.id} />
      ))}
    </section>
  );
};

export default Products;
