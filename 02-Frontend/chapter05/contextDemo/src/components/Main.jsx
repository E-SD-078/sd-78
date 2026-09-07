import useAuth from '../context/useAuth';
import { useState } from 'react';
const Main = () => {
  const { user, setUser } = useAuth(); //consume the global state that is provided by AuthProvider
  console.log(user.firstName);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, firstName, lastName });
  };
  return (
    <main>
      <h1>main content</h1>
      <p>change user name</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button>Change name</button>
      </form>
    </main>
  );
};

export default Main;
