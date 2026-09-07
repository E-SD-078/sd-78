import { useState } from 'react';
//createContext used to share global state
import AuthContext from './AuthContext';
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ firstName: 'john', lastName: 'Doe', email: 'j@d.com' });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //value is a keyword when it comes to sharing the state
  const toggleLoggedIn = () => setIsLoggedIn((prev) => !prev);
  return (
    // what we put in the value will be provided to be consumed as global state
    <AuthContext value={{ user, isLoggedIn, toggleLoggedIn, setUser }}>{children}</AuthContext>
  );
};

export default AuthProvider;
