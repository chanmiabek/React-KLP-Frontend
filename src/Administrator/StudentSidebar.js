import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentSidebar = () => (
  <div className="bg-light vh-100 p-3 border-end bg-blue" style={{
    margin: '0',
    right:'0',
    maxHeight: '100vh',
    //backgroundColor: 'Scrollbar',
    backgroundColor: 'blue',
    color: 'black',
    top: '0',
    left: '0',
    gap: '50px',
    width: '200px',
    overflowY: 'auto',
    zIndex: '1000',
    fontFamily: 'Arial, sans-serif', 
    fontSize: '16px',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: '1.5',  
    padding: '10px',
    boxSizing: 'border-box',  
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    ':hover': { backgroundColor: '#f0f0f0', color: '#333' }
  }}>
    <h5 className="mb-4 fw-bold">Student Menu</h5>
    <NavLink to="/StudentDashboard" className="nav-link">🏠 Dashboard</NavLink>
    <NavLink to="/course" className="nav-link">📘 My Courses</NavLink>
    <NavLink to="/forum" className="nav-link">💬 Forum</NavLink>
    <NavLink to="/account" className="nav-link">👤 Account</NavLink>
    <NavLink to="/setting" className="nav-link">⚙️ Settings</NavLink>
  </div>
);

export default StudentSidebar;
