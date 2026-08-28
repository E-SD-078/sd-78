const ServiceCardPrice = ({ price }) => {
  switch (true) {
    case price >= 0 && price <= 100:
      return <p style={{ color: 'green' }}>best deal ever</p>;
    case price > 100 && price <= 200:
      return <p style={{ color: 'lightGreen' }}>good deal</p>;
    case price >= 500 && price <= 900:
      return <p style={{ color: 'yellow' }}>not that cheap</p>;
    case price >= 1000 && price <= 1500:
      return <p style={{ color: 'red' }}>that is super expensive</p>;
    default:
      break;
  }
};
export default ServiceCardPrice;
