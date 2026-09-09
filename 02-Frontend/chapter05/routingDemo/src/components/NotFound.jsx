import { Link } from 'react-router';

const NotFound = () => {
  return (
    <>
      <h2>404 Page not found</h2>
      <Link to='/' className='inline-block text-center bg-blue-500 m-2 text-white rounded p-2'>
        Go Home
      </Link>
    </>
  );
};
export default NotFound;
