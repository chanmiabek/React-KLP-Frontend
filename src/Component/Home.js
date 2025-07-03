import CounterSection from './CounterSection';
import FeatureCard from './FeatureCard';
import Carousel from './Carousel';
import FAQsection from './FAQsection';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Component/Layout.css'
// import Testimonial from './Testimonial';
import Course from './Course';
import instructor1 from '../Asset/image/instructor1.jpg';
import image3 from '../Asset/image/image4.jpg';



const Home = () => {
  return (
    <>
             {/* Hero Section */}
      <section className="position-relative" style={{ height: '100vh', overflow: 'hidden' }}>
        <img
          src={instructor1}
          alt="Instructor"
          className="w-100 h-100 img-fluid hero-img"
          style={{
            objectFit: 'cover',
            filter: 'brightness(70%)',
            transition: 'transform 0.5s ease',
          }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center p-3">
          <h1 className="fw-bold display-5">Your Gateway to Knowledge</h1>
          <p className="lead">Empowering the Kakuma community through accessible education.</p>
          <Link to="/courses" className="btn btn-lg btn-outline-light fw-semibold hover-scale">
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Welcome Message */}
      <div className="container my-5">
        <h2 className="text-center text-primary fw-bold">Kakuma Learning Platform (KLP)</h2>
        <p className="text-center fst-italic">"Empowering Your Learning Journey"</p>
        <p className="text-center">
          Welcome to the Kakuma Learning Platform! Your gateway to knowledge, skills, and a brighter future.
        </p>
        <p>
          Whether you're looking to enhance your academic skills, learn a new trade, or simply explore new interests, our
          platform offers a diverse range of courses and resources designed to empower you.
        </p>
      </div>



    <Course />
    {/* <Testimonial /> */}
    <CounterSection />
    <FeatureCard />
    <Carousel />
    <FAQsection />


    </>
  );
};

export default Home;
