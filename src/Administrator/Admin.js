// Example: AdminSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Assuming this provides userRole

const AdminSidebar = () => {
    const { userRole } = useAuth();

    return (
        <div className="d-flex flex-column p-3 bg-dark text-white" style={{ width: '280px', height: '100vh' }}>
            <a href="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">KLP Admin</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li><NavLink to="/admin" className="nav-link text-white" end>Dashboard</NavLink></li>

                {(userRole === 'super_admin' || userRole === 'user_admin') && (
                    <li><NavLink to="/admin/users" className="nav-link text-white">User Management</NavLink></li>
                )}
                {(userRole === 'super_admin' || userRole === 'course_admin') && (
                    <li><NavLink to="/admin/courses" className="nav-link text-white">Course Management</NavLink></li>
                )}
                {(userRole === 'super_admin' || userRole === 'finance_admin') && (
                    <li><NavLink to="/admin/reports" className="nav-link text-white">Reports</NavLink></li>
                )}
                {/* Add more links based on roles */}
            </ul>
            <hr />
            {/* Logout link/button */}
        </div>
    );
};

export default AdminSidebar;