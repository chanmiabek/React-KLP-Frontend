import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // 1. Call the server's logout endpoint
      await axios('https://backend-api-1-awol.onrender.com/api/user/logout', { method: 'POST', withCredentials: true });

      // 2. Clear client-side data
      localStorage.removeItem('userToken');

      // 3. Redirect the user to the login page
      navigate('/login');
    } catch (error) {
      // Handle any errors that occur during the logout process.
      console.error('Logout failed:', error);

      alert('Failed to log out. Please try again.');
    }
  };

  return (
    // This button triggers the logout process when clicked.
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;