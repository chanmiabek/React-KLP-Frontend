import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav defaultActiveKey="/dashboard" className="flex-column bg-light p-3 vh-100 shadow-sm">
      <Nav.Link href="/dashboard">🏠 Dashboard</Nav.Link>
      <Nav.Link href="/courses">📘 My Courses</Nav.Link>
      <Nav.Link href="/progress">📈 Progress</Nav.Link>
      <Nav.Link href="/settings">⚙️ Settings</Nav.Link>
    </Nav>
  );
};

export default Sidebar;
