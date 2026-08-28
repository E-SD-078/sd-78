import ServiceCard from './ServiceCard';

const Services = ({ services }) => {
  return (
    <section>
      {services.map((service) => (
        /*
         service = {
            id: 2,
            title: 'UI/UX Design',
            description: 'Create intuitive and    engaging user experiences.',
            available: false,
          },
        */
        <ServiceCard service={service} key={service.title} />
      ))}
    </section>
  );
};

export default Services;
