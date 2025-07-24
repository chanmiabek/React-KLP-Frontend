import React from 'react';
import {  useNavigate } from 'react-router-dom';
import ComputerStudentImage from '../Asset/image/Computer-Students.jpg';
import study1 from '../Asset/image/study1.jpg';
import StudentSelfStudy from '../Asset/image/Student-Selfstudy.jpg';
import BannerImg from '../Asset/image/image4.jpg';
import { useAuth } from '../contexts/AuthContexts';
//import Sidebar from '../Component/Sidebar';


const Course = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const CourseCard = [
        {
            name:  "Python",
            quote: "This LMS helped me learn React in just 2 weeks. The course structure is amazing!",
            image: ComputerStudentImage,
            btn: "Enroll Now"
        },
        {
            name: "JAVA",
            quote: "Easy to use and access. I love how the content is well organized and interactive.",
            image: StudentSelfStudy,
            btn: "Enroll Now"
        },
        {
            name: "JAVASCRIPT",
            quote: "Enrolling in this platform was the best decision. I can learn at my own pace!",
            image: study1,
            btn: "Enroll Now"
        },
        {
            name: "C Language",
            quote: "Enrolling in this platform was the best decision. I can learn at my own pace!",
            image: study1,
            btn: "Enroll Now"
        },
        {
            name: "C++",
            quote: "The C++ course is very comprehensive and beginner-friendly!",
            image: ComputerStudentImage,
            btn: "Enroll Now"
        },
        {
            name: "ReactJS",
            quote: "ReactJS course helped me build real-world projects easily.",
            image: StudentSelfStudy,
            btn: "Enroll Now"
        },
        {
            name: "Data Science",
            quote: "Great introduction to data science concepts and tools!",
            image: study1,
            btn: "Enroll Now"
        },
        {
            name: "Web Development",
            quote: "Covers everything from HTML to advanced JavaScript!",
            image: ComputerStudentImage,
            btn: "Enroll Now"
        }
    ];

    const handleEnroll = () => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            
            alert('You are enrolled!');
        }
    };
    return (
<>

    <div className="main-content">
      <div className="hero-banner">
        <img src={BannerImg} alt="Courses Banner" />
        <div className="banner-text">
          Unlock your potential at <b>KAKUMA LEARNING PLATFORM</b>
        </div>
      </div>
        </div>
    <div className="my-5">
        <h2 className="text-center mb-4">Learn Our Courses</h2>
        <p className="text-center mb-5">Explore our wide range of courses designed to help you succeed in your career.</p>
        <div className="row">
        {CourseCard.map((course, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"  key={index}   
                 onMouseOver={(e) => e.currentTarget.style.transform= 'scale(1.1)'}
                 onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                
                <div className="card h-100 w-100 shadow-sm p-0">
                    <div className="text-center">
                        <img
                            src={course.image}
                            alt={course.name}
                            className="card-img-top img-fluid"
                            style={{
                                height: window.innerWidth < 768 ? '150px' : '250px',
                                width: '100%',
                                objectFit: 'cover',
                                borderRadius: '0.25rem',
                                boxShadow: '0 2px 4px rgba(0,0,0    ,0.1)',
                                transition: 'transform 0.3s ease',                  
                                cursor: 'pointer',
                                margin: '10px 0',
                                
                                
                            }}
                            
                        />
                    </div>
                    <h5 className="text-center mt-2">{course.name}</h5>
                    <p className="text-center">{course.quote}</p>
                    <div className="d-flex justify-content-center mb-3">
                        <button
                            className="btn btn-primary w-75"
                            style={{ fontWeight: 'bold', fontSize: '1rem' }}
                            onClick={handleEnroll}
                          
                        >
                            {course.btn}
                        </button>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
    </>
    );
};

export default Course;
