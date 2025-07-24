import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContexts';

const RoleSelector = () => {
  const { setRole, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    if (savedRole) {
      navigate(`/${savedRole}/dashboard`);
    }
  }, [navigate]);

  const handleRoleSelect = (selectedRole) => {
    localStorage.setItem('role', selectedRole);
    setRole(selectedRole);
    navigate(`/${selectedRole}/dashboard`);
  };

  return (
    <div className="container mt-5">
      <h3>Select Your Role</h3>
      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary" onClick={() => handleRoleSelect('student')}>Student</button>
        <button className="btn btn-success" onClick={() => handleRoleSelect('instructor')}>Instructor</button>
      </div>
    </div>
  );
};

export default RoleSelector;
