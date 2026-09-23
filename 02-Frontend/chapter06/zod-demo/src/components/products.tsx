import { useEffect, useState } from 'react';
import { z } from 'zod';
import { ProductSchema } from '../schemas/ProductSchema';
type Product = z.infer<typeof ProductSchema>;
const Products = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string>('');
  async function getProduct(productId: number): Promise<Product> {
    if (!Number.isInteger(productId) || productId < 1 || productId > 20)
      throw new Error('FakeStore API only has 20 products :D');
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
    const resData = await response.json(); // At this point, 'data' is of type 'any'
    // const resData = (await response.json()) as Product;
    console.log(resData);
    // Here is the validation gate.
    // you could also use .parse() which would throw an error
    const { data, error, success } = ProductSchema.safeParse(resData);
    if (!success) {
      // The API returned data that doesn't match our schema.
      setError(z.prettifyError(error));
      throw new Error(z.prettifyError(error));
    }
    // If we're here, data is valid. Return the type-safe result.
    return data;
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const product = await getProduct(2);
        // We can trust 'product' completely. TypeScript knows its shape.
        console.log(product.title.toUpperCase());
        console.log(product.category);
        console.log(product.description);
        console.log(product.price);
        setProduct(product);
      } catch (error: unknown) {
        // This catch block now handles network errors AND validation errors.
        if (error instanceof Error) {
          console.error('Could not display product:', error.message);
        } else {
          console.log('Something went wrong');
        }
      }
    };
    getData();
  }, []);
  return (
    <section>
      {product ? (
        <article>
          <img src={product.image} alt={product.title} width={200} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>{product.category}</p>
        </article>
      ) : (
        <p>Loading product...</p>
      )}
      {error && <p>{error}</p>}
    </section>
  );
};

export default Products;
