import { Outlet } from 'react-router';
import { Header } from '@/components';
const MainLayout = () => {
  return (
    <>
      <Header />
      <div className='container mx-auto mt-4'>
        <Outlet />
      </div>
    </>
  );
};
export default MainLayout;
