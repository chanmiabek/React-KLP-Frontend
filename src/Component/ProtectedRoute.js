import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContexts';
import Dashboard from '../Component/Dashboard';
import StudentDashboard from '../Administrator/StudentDashboard';
import InstructorDashboard from '../Administrator/InstructorDashboard';

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, role } = useAuth();
  const location = useLocation();

  if (!allowedRoles) return <Outlet />;

  if (!isAuthenticated) return <Navigate to="/login" replace state={{ from: location }} />;
  if (!role) return <Navigate to="/unauthorized" replace />;
  // Check if the user's role is in the allowed roles
  if (Array.isArray(allowedRoles) && allowedRoles.length === 0) return <Outlet />;
  if (typeof allowedRoles === 'string') allowedRoles = [allowedRoles];
  if (!Array.isArray(allowedRoles)) {
    console.error('allowedRoles must be an array or a string');
    return <Navigate to="/unauthorized" replace />;
  }
  // If the user's role is not in the allowed roles, redirect to unauthorized page
  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    console.warn(`User role "${role}" is not allowed. Redirecting to unauthorized page.`);
  }
  //if (allowedRoles.length === 0) return <Outlet />;
  if (allowedRoles.length === "student" && allowedRoles[0] === 'login') return <StudentDashboard />;
  if(allowedRoles.length === "instructor" && allowedRoles[1] === 'login') return <InstructorDashboard />


  if (!allowedRoles.includes(role)) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
