import CounterSection from './CounterSection';
import FeatureCard from './FeatureCard';
//import Carousel from './Carousel';
import FAQsection from './FAQsection';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './Course';
import Image2 from '../Asset/image/image2.jpg';
// import KakumaFallback from '../Asset/video/kakuma-fallback.mp4';
import { motion } from 'framer-motion';
import KakumaFallback from '../Asset/kakuma-fallback.mp4.mp4';


const Home = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <>
      <section
        className="position-relative d-flex align-items-center justify-content-center text-white"
        style={{ height: '100vh', overflow: 'hidden' }}
      >
        {/* 🔥 Background (Video or Image fallback) */}
        {isMobile ? (
          <img
            src={Image2} // Add a fallback image in public/images
            alt="Hero background"
            className="position-absolute w-100 h-100 object-fit-cover"
            style={{ zIndex: -2, objectFit: 'cover', filter: 'brightness(65%)' }}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="position-absolute w-100 h-100 object-fit-cover"
            style={{ zIndex: -2, filter: 'brightness(60%)' }}
          >
            <source src={KakumaFallback} type="video/mp4" />
          </video>
        )}

        {/* 🎨 Gradient Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(to top right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))',
            zIndex: -1,
          }}
        ></div>

        {/* ✨ Hero Text + Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-3"
        >
          <h1 className="fw-bold display-4 mb-3">Your Gateway to Knowledge</h1>
          <p className="lead mb-4">
            Empowering the Kakuma community through accessible education.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to="/course" className="btn btn-lg btn-outline-light fw-semibold">
              Explore Courses
            </Link>
          </motion.div>
        </motion.div>

        {/* 🔽 Scroll-Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="position-absolute bottom-3 text-center"
        >
          <div className="text-white fs-4">
            <i className="bi bi-chevron-down bounce-arrow"></i>
          </div>
        </motion.div>
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

      {/* Gallery Section */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Our Community in Action</h3>
        <div className="row g-3">
          {[require('../Asset/image/Student-Library.jpg'), require('../Asset/image/Student-science1.jpg'), require('../Asset/image/Student-Selfstudy.jpg'), require('../Asset/image/Graduate-Students.jpg')].map((img, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <img src={img} alt="Community" className="img-fluid rounded shadow-sm" style={{height: '180px', objectFit: 'cover', width: '100%'}} />
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Success Stories</h3>
        <div className="row">
          {[
            { name: 'Mary A.', story: 'After joining KLP, I landed my first remote job as a web developer!', img: require('../Asset/image/Freelencer.jpg') },
            { name: 'James K.', story: 'KLP helped me pass my university entrance exams with flying colors.', img: require('../Asset/image/Graduate-Students.jpg') },
            { name: 'Fatima S.', story: 'I started my own tutoring group after learning online with KLP.', img: require('../Asset/image/student-testimonial1.jpg') },
          ].map((s, idx) => (
            <div className="col-md-4 mb-3" key={idx}>
              <div className="card h-100 shadow-sm p-3">
                <div className="text-center">
                  <img src={s.img} alt={s.name} className="rounded-circle mb-3" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                </div>
                <h5 className="text-center">{s.name}</h5>
                <p className="text-center">"{s.story}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Course />
      {/* <Testimonial /> */}
      <CounterSection />
      <FeatureCard />
      {/* <Carousel /> */}
      <FAQsection />
    </>
  );
};

export default Home;
