import React, { useState} from 'react';
import study1 from '../Asset/image/study1.jpg';

const About = () => {
    const [formData] = useState({});



    return (
        <>
            <div className="container my-5 py-4">
                <h2 className="text-center mb-4">About Kakuma Learning Platform</h2>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h4>🎯 Mission</h4>
                        <p>
                            To empower learners in underserved communities by providing free and accessible
                            digital education, equipping them with modern skills for a better future.
                        </p>
                    </div>

                    <div className="col-md-6 mb-4">
                        <h4>🌍 Vision</h4>
                        <p>
                            To become a leading platform for inclusive learning across refugee settlements
                            and marginalized regions, where every student has the tools to thrive in a digital world.
                        </p>
                    </div>
                </div>

                <div className="mb-5">
                    <h4>🧭 Core Values</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">📚 <strong>Accessibility:</strong> Learning for all, regardless of location or status.</li>
                        <li className="list-group-item">⚡ <strong>Empowerment:</strong> Enabling youth with skills that lead to independence.</li>
                        <li className="list-group-item">🤝 <strong>Community:</strong> Building a network of support and growth.</li>
                        <li className="list-group-item">💡 <strong>Innovation:</strong> Using modern tools for meaningful learning.</li>
                        <li className="list-group-item">🛡️ <strong>Integrity:</strong> Trust, transparency, and purpose in everything we do.</li>
                    </ul>
                </div>

                <div className="card shadow-sm p-4 bg-light">
                    <h4>✍️ Founder’s Note</h4>
                    <blockquote className="blockquote mt-3">
                        <p>
                            "Growing up in Kakuma, I witnessed firsthand the challenges faced by young people with
                            limited access to quality education. Kakuma Learning Platform was born out of a vision
                            to change that narrative — to create a space where every learner, regardless of where
                            they come from, can access knowledge, grow their skills, and believe in their potential.
                            This platform is not just about courses — it's about unlocking futures, inspiring leaders,
                            and building a generation of changeovers."
                        </p>
                        <footer className="blockquote-footer mt-3">Maggiso Jak, Founder & Developer</footer>
                    </blockquote>
                </div>
            </div>
            <div className="container my-5">
                {formData.imageUrl && <img src={formData.imageUrl} alt="About" className="img-fluid my-3" />}
                <h3 className="text-center mb-4">Gallery</h3>
                <div className="row g-3">
                    {[require('../Asset/image/Student-Library.jpg'), require('../Asset/image/Student-science1.jpg'), require('../Asset/image/Student-Selfstudy.jpg'), require('../Asset/image/Graduate-Students.jpg')].map((img, idx) => (
                        <div className="col-6 col-md-3" key={idx}>
                            <img src={img} alt="About Gallery" className="img-fluid rounded shadow-sm" style={{height: '180px', objectFit: 'cover', width: '100%'}} />
                        </div>
                    ))}
                </div>
            </div>
            <Testimonial />

        </>
    );
};


const testimonials = [
    {
    name: "Jane Doe",
    role: "Web Developer",
    quote: "This LMS helped me learn React in just 2 weeks. The course structure is amazing!",
    image: study1
    },
    {
    name: "Ali Mwangi",
    role: "Student, Nairobi University",
    quote: "Easy to use and access. I love how the content is well organized and interactive.",
    image: study1
    },
    {
    name: "Fatima Ahmed",
    role: "Freelancer",
    quote: "Enrolling in this platform was the best decision. I can learn at my own pace!",
    image: study1
    }
];

const Testimonial = () => {
    return (
    <div className="my-5">
        <h2 className="text-center mb-4">What Our Learners Say</h2>
        <div className="row">
        {testimonials.map((testimonial, index) => (
            <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm p-3">
                <div className="text-center">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                    style={{ width: '80px', height: '80px' }}
                />
                </div>
                <h5 className="text-center">{testimonial.name}</h5>
                <p className="text-muted text-center">{testimonial.role}</p>
                <p className="text-center">“{testimonial.quote}”</p>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
};

export default About;
