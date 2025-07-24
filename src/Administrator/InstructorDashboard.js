import React from 'react';
import { Outlet } from 'react-router-dom';
import InstructorSidebar from '../Administrator/InstructorSidebar';
import InstructorHeader from '../Administrator/InstructorHeader';

const InstructorDashboard = () => (
  <div className="d-flex">
    <InstructorSidebar />
    <div className="flex-grow-1">
      <InstructorHeader />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  </div>
);

export default InstructorDashboard;
// This code defines the InstructorDashboard component, which serves as a layout for the instructor's dashboard.