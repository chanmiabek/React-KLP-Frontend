import React from 'react';

const StudentHeader = () => (
  <div className="d-flex justify-content-between align-items-center p-3 bg-white border-bottom">
    <h4>Student Dashboard</h4>
    <button className="btn btn-outline-danger">Logout</button>
  </div>
);

export default StudentHeader;