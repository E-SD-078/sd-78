import { Link } from 'react-router';
// import About from './About'; //same folder
// import  MainLayout from '../layouts/MainLayout';//the other folder is the sibling of our folder
// import Header from '@/components/Header';

const Home = () => {
  return (
    <>
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
