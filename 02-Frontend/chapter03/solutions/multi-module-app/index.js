// import { fetchProducts } from './modules/network.js';
// import { createProductCard } from './modules/ui.js';
import { fetchProducts, createProductCard } from './modules/index.js';
// Fetch products and display them on page load
window.addEventListener('load', async () => {
  try {
    const productContainer = document.getElementById('product-container');
    const products = await fetchProducts();

    products.forEach((product) => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error(error);
  }
});
