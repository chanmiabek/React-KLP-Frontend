import React, { useState, useEffect } from 'react'; // Import useEffect for checking login status
import Logout from '../Administrator/Logout';
import { Link } from 'react-router-dom'; // Corrected import: 'react-router-dom' not 'react-dom'

const InstructorHeader = () => { // Function component needs curly braces
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  // Use useEffect to check login status when the component mounts
  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Empty dependency array means this runs once on mount

  return ( // Return statement is necessary for JSX
    <div className="d-flex justify-content-between align-items-center p-3 bg-white border-bottom">
      <h4>Instructor Dashboard</h4>
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-primary me-2">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        </button>
        {isLoggedIn ? (
          // If logged in, show the Logout component
          <Logout />
        ) : (
          // If not logged in, show a Login link
          <button className="btn btn-outline-success">
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Logout</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default InstructorHeader;