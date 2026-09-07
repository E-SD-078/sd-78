import useAuth from '../context/useAuth';

const Header = () => {
  const { user, isLoggedIn, toggleLoggedIn } = useAuth();

  return (
    <header>
      <nav>
        <h1>logo</h1>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          {isLoggedIn ? (
            <li>
              <p>
                welcome back {user.firstName} {user.lastName}
              </p>
              <button onClick={toggleLoggedIn}>logout</button>
            </li>
          ) : (
            <button onClick={toggleLoggedIn}>login</button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
