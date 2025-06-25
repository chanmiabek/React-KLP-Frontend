import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Component/Layout.css';
//import Footer from '.Component/Footer';


const Home = () =>{

return (
  <>
    <hero />
    <footer />
    <div style={{
      backgroundColor: "#fff",
      padding: "20px",
      width: "100%",
      maxWidth: "600px",
      margin: "10px auto",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      ":hover": {
        transform: "scale(1.05)"
      },

    }}>
      <section className="welcome-section">
                <h2>Welcome to the Kakuma Learning Platform!</h2>
                <p>Your gateway to knowledge, skills, and a brighter future.</p>
                {/* ... more content */}
            </section>
      <h2><span style={{ color: "#007bff" }}>Kakuma Learning Platform (KLP
      )</span></h2>
      <div>
        {/* <img src={instructor1} width={200} height={200} alt="Instructor" style={{ borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }} /> */}
        <em>"Empowering Your Learning Journey" (KLP)</em>
      </div>

      <p>Your gateway to knowledge and skills</p>

      <p>
        Welcome to the Kakuma Learning Platform! Your gateway to knowledge, skills, and a brighter future.

        We believe that learning is a fundamental right, and everyone in the Kakuma refugee camp and host community deserves access to quality education.
        <p></p>Whether you're looking to enhance your academic skills, learn a new trade, or simply explore new interests, our platform offers a diverse range of courses and resources designed to empower you.
      </p>

      <h3>Why choose us?</h3>

      <p>Accessible Learning: Learn anytime, anywhere, with an internet connection.
      Diverse Courses: From essential literacy to vocational training, we have something for everyone.
      Community Focused: Designed specifically for the needs and aspirations of the Kakuma community.
      Skill Development: Gain practical skills that open doors to opportunities.
      Get started today! Explore our courses, register for a program, and embark on your learning journey.</p>

      <h3>About Us</h3>

      <p>
        The Kakuma Learning Platform was established with a singular mission: to provide accessible, high-quality education and skill-building opportunities to the residents of the Kakuma refugee camp and surrounding host communities. We understand the unique challenges faced by individuals in this region and are committed to bridging educational gaps and fostering self-reliance.
      </p>

      <p>
        Our platform is built on the principles of inclusivity, empowerment, and community development. We collaborate with local and international partners to offer a curriculum that is both relevant and impactful, addressing the immediate needs and long-term aspirations of our learners. We believe that education is a powerful tool for transformation, enabling individuals to build better lives for themselves, their families, and their communities.
      </p>

      <p>Explore a wide range of courses and resources to enhance your learning experience.</p>
      <p>Whether you're a student, educator, or professional, our platform offers a user-friendly interface to access educational resources and connect with a vibrant learning community.</p>
      <p>Join us today and embark on a journey of knowledge and growth!</p>
      <p>For more information, please visit our <a href="https://www.maggisoworld.com">Learning Management System</a>.</p>
    </div>
  </>
);
}


export default Home;
