import { NavLink } from 'react-router';
const Header = () => {
  return (
    <header className='bg-red-500 p-2 '>
      <nav>
        <ul className='flex gap-2 font-medium'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'bg-white text-red-500' : 'bg-red-500 text-white'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'bg-white text-red-500' : 'bg-red-500 text-white'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? 'bg-white text-red-500' : 'bg-red-500 text-white'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              className={({ isActive }) =>
                isActive ? 'bg-white text-red-500' : 'bg-red-500 text-white'
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
