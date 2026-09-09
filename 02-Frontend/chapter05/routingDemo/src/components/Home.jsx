import { Link } from 'react-router';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header />
      <h2>Home</h2>
      <Link
        to='/register'
        className='inline-block text-center bg-blue-500 m-2 text-white rounded p-2'
      >
        Register now!
      </Link>
    </>
  );
};
export default Home;
