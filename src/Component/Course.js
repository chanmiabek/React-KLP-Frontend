import React from "react";
import {  useNavigate } from "react-router-dom";

const Course = () => {

    const navigate = useNavigate();

    const handleEnrollClick = (course) => {
      if (handleEnrollClick) {
        navigate(`/enroll/${course.id}`);
      } else {
        // Option 1: Redirect to login with a message
        alert('Please log in or register to enroll in this course.');
        navigate('/login?redirect=/enroll/' + course.id);
      }
    };





const CourseCard = ({ course }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <button className="btn btn-primary" onClick={() => handleEnrollClick(course)}>
          Enroll Now
        </button>
      </div>
    </div>
  </div>
);

const sampleCourses = [
  {
    id: 1,
    title: "Data Analysis",
    description: "Learn how to collect, organize, and analyze large amounts of data to gain insights and make informed decisions."
  },
  {
    id: 2,
    title: "Cybersecurity",
    description: "Learn about the latest threats and vulnerabilities in the digital world and develop skills to protect yourself and your data."
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Learn how to create and execute effective marketing campaigns to reach and engage your target audience."
  },
  {
    id: 4,
    title: "Freelancing",
    description: "Learn how to find and work with freelance opportunities to gain experience and build a portfolio of work."
  },
  {
    id: 5,
    title: "Fullstack Developer",
    description: "Learn how to code and make website application.",
  }
];

const CoursesCard = () => {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">Available Courses</h3>
      <div className="row">
        {sampleCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

    // Use the CoursesCard component to display the list of courses
    return (
      <div>
        <CoursesCard />
      </div>
    );
  };

export default Course;
