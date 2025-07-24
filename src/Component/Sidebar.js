// import { useNavigate } from 'react-router-dom';
// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const SidebarNav = ({ onLinkClick }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear auth token or session here
//     localStorage.removeItem("token");
//     navigate("/login");
//     if (onLinkClick) onLinkClick(); // Close sidebar on mobile if open
//   };

//   return (
//     <Nav defaultActiveKey="/dashboard" className="flex-column">
//       <Nav.Link as={Link} to="/dashboard" onClick={onLinkClick}>🏠 Dashboard</Nav.Link>
//       <Nav.Link as={Link} to="/course" onClick={onLinkClick}>📘 My Courses</Nav.Link>
//       <Nav.Link as={Link} to="/progress" onClick={onLinkClick}>📈 Progress</Nav.Link>
//       <Nav.Link as={Link} to="/forum" onClick-={onLinkClick}>👥 Forum</Nav.Link>
//       <Nav.Link as={Link} to="/account" onClick={onLinkClick}>👤 Account</Nav.Link>
//       <Nav.Link as={Link} to="/setting" onClick={onLinkClick}>⚙️ Settings</Nav.Link>
//       <Nav.Link onClick={handleLogout} className="text-danger mt-3">🚪 Logout</Nav.Link>
//     </Nav>
//   );
// };
// export default SidebarNav;
