import React from 'react';
import { Link } from 'react-router-dom';
import ComputerStudentImage from '../Asset/image/Computer-Students.jpg';
import study1 from '../Asset/image/study1.jpg';
import StudentSelfStudy from '../Asset/image/Student-Selfstudy.jpg';
import BannerImg from '../Asset/image/image4.jpg';


const Course = () => {
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
    }
];
    return (
    <>
      <div className="container-fluid p-0">
        <img src={BannerImg} alt="Courses Banner" className="w-100 mb-4" style={{ maxHeight: '300px', objectFit: 'cover' }} />
      </div>
    <div className="my-5">
        <h2 className="text-center mb-4">Learn Our Courses</h2>
        <p className="text-center mb-5">Explore our wide range of courses designed to help you succeed in your career.</p>
        <div className="row">
        {CourseCard.map((CourseCard, index) => (
            <>
                <div className="col-md-3 mb-3" key={index}>
                    <div className="card h-100 shadow-sm p-3">
                        <div className="text-center">
                            <img
                                src={CourseCard.image}
                                alt={CourseCard.name}
                                className="card-img-top img-fluid"
                                style={{
                                height:
                                window.innerWidth < 768 ?'150px' : '250px',
                                width:'100%',
                                objectFit: 'cover'
                            }}
                            />
                        </div>
                        <h5 className="text-center">{CourseCard.name}</h5>
                        <p className="text-center">{CourseCard.quote}</p>
                        <p className="btn btn-primary text-center">{CourseCard.btn}</p>
                    </div>
                </div>
            </>
        ))}
        </div>
    </div>
    </>
    );
};

export default Course;
