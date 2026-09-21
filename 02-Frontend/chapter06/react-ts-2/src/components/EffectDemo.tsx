import { useState, useEffect } from 'react';
type User = { id: number; name: string };
const EffectDemo = () => {
  const [user, setUser] = useState<User | null>();
  // no need to type useEffect but we need to type the state that is used in it
  useEffect(() => {
    if (user) {
      document.title = `Welcome, ${user.name}`;
    }
  }, [user]);

  return (
    <div>
      <button onClick={() => setUser({ id: 1, name: 'john' })}>get user</button>
      <p>User: {user ? `${user.id}: ${user.name}` : 'None'}</p>
    </div>
  );
};
export default EffectDemo;
