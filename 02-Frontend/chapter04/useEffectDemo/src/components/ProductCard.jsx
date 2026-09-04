const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt='' height='100' />
    </div>
  );
};
export default ProductCard;
