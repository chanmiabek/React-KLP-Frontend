import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentSidebar = () => (
  <div className="bg-light vh-100 p-3 border-end">
    <h5 className="mb-4">Student Menu</h5>
    <NavLink to="dashboard" className="nav-link">🏠 Dashboard</NavLink>
    <NavLink to="course" className="nav-link">📘 My Courses</NavLink>
    <NavLink to="forum" className="nav-link">💬 Forum</NavLink>
    <NavLink to="account" className="nav-link">👤 Account</NavLink>
    <NavLink to="settings" className="nav-link">⚙️ Settings</NavLink>
  </div>
);

export default StudentSidebar;
