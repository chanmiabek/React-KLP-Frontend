import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebar from '../Administrator/StudentSidebar';
import StudentHeader from '../Administrator/StudentHeader';

const StudentDashboard = () => (
  <div className="d-flex">
    <StudentSidebar />
    <div className="flex-grow-1">
      <StudentHeader />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  </div>
);

export default StudentDashboard;
