import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  const servicesArray = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build modern, responsive websites.',
      available: true,
      price: 100,
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Create intuitive and engaging user experiences.',
      available: false,
      price: 600,
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Develop applications for iOS and Android.',
      available: true,
      price: 900,
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Grow your brand and reach more customers.',
      available: false,
      price: 1000,
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Services services={servicesArray} />
      <Footer />
    </>
  );
}

export default App;
