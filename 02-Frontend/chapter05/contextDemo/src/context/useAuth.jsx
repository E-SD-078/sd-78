import AuthContext from './AuthContext';
import { use } from 'react';
const useAuth = () => {
  const context = use(AuthContext);
  if (!context) throw new Error('useAuth must be used within a AuthProvider');
  return context;
};
export default useAuth;
