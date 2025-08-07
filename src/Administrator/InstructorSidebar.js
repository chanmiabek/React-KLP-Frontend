import React from 'react';
import { NavLink } from 'react-router-dom';

const InstructorSidebar = () => (
  <div className="bg-light vh-100 p-3 border-end">
    <h5 className="mb-4">Instructor Panel</h5>
    <NavLink to="/dashboard" className="nav-link">🏠 Dashboard</NavLink>
    <NavLink to="/student" className="nav-link">🎓 Student Progress</NavLink>
    <NavLink to="/announcement" className="nav-link">📢 Announcements</NavLink>
    <NavLink to="/add-course" className="nav-link">➕ Add Course</NavLink>
    <NavLink to="/assignment" className="nav-link">📝 Manage Assignments</NavLink>
    <NavLink to="/recommendation" className="nav-link">💡 Recommendations</NavLink>
  </div>
);

export default InstructorSidebar;