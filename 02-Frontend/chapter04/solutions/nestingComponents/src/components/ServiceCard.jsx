import ServiceCardPrice from './ServiceCardPrice';

const ServiceCard = ({ service }) => {
  return (
    <div className='card'>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      {/* {service.available && <button>Get Now</button>} */}
      {/* {service.available ? (
            <button>Get Now</button>
          ) : (
            <button disabled={true}>not available now!</button>
          )} */}
      {/* !true = false
              !false = true
              when the service is not available that will make service.available = false but we want to disable the button and the disabled prop take true or false and when we do !service.available we are saying disabled = !false which is true
           */}
      <button disabled={!service.available}>
        {service.available ? 'Get Now' : 'not available now!'}
      </button>
      )
      {/* {services.map((service) => {
        return (
          <div>
            <h2>{service.title}</h2>
          </div>
        );
      })} */}
      <ServiceCardPrice price={service.price} />
    </div>
  );
};
export default ServiceCard;
