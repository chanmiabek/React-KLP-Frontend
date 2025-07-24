import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // 1. Call the server's logout endpoint
      await axios('/api/logout', { method: 'POST' });

      // 2. Clear client-side data
      localStorage.removeItem('userToken');

      // 3. Redirect
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};
export default Logout;