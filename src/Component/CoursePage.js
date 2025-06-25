// src/components/CourseCard.js or src/pages/CoursesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const CourseCard = ({ course }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    if (isAuthenticated) {
      navigate(`/enroll/${course.id}`); // Navigate to enrollment page
    } else {
      // Option 1: Redirect to login with a message
      alert('Please log in or register to enroll in this course.');
      navigate('/login?redirect=/enroll/' + course.id); // Pass redirect path
      // Option 2: Show a modal
      // openLoginRegisterModal();
    }
  };

  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button onClick={handleEnrollClick}>Enroll Now</button>
    </div>
  );
};

export default CourseCard;
