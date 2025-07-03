// src/components/Footer.js
import './Footer.css'; // We'll create this CSS file next
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa';// Assuming you are using React Router for navigation

// //
// import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {


    const [showTopBtn, setShowTopBtn] = useState(false);
    const [language, setLanguage] = useState('en');

        useEffect(() => {
    const handleScroll = () => {
        setShowTopBtn(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

    return (
    <footer className="footer-klp bg-dark text-light pt-5 pb-3 mt-auto">
        <div className="container">
        <div className="row gy-4 text-start">

          {/* About / Logo */}
            <div className="col-md-4">
            <h4 className="fw-bold text-primary">KLP</h4>
            <p>
                Empowering learners in Kakuma and beyond. Access education, grow skills,
                and connect with instructors anytime, anywhere.
            </p>
            <div className="mt-3">
                <label htmlFor="language" className="form-label">🌐 Language:</label>
                <select
                id="language"
                className="form-select form-select-sm bg-dark text-light border-light"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                >
                <option value="en">English</option>
                <option value="sw">Swahili</option>
                <option value="ar">Arabic</option>
                </select>
            </div>
        </div>

          {/* Quick Links */}
            <div className="col-md-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/courses" className="footer-link">Courses</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
            </div>

          {/* Newsletter */}
            <div className="col-md-4">
            <h5 className="fw-semibold">Stay Updated</h5>
            <form>
            <input
                type="email"
                placeholder="Your email"
                className="form-control mb-2"/>
                <button type="submit" className="btn btn-primary btn-sm w-100">
                Subscribe to Newsletter
            </button>
            </form>

            <div className="d-flex gap-3 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-icon"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-icon"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-icon"><FaInstagram /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-icon"><FaYoutube /></a>
            </div>
            </div>
        </div>

        <hr className="border-secondary mt-4" />
        <p className="text-center mb-0 small">© {new Date().getFullYear()} Kakuma Learning Platform | All rights reserved</p>
        </div>

      {/* Back to Top */}
        {showTopBtn && (
        <button className="back-to-top-btn" onClick={scrollToTop} title="Back to top">
            <FaArrowUp />
        </button>
        )}
    </footer>
    )
};

export default Footer;
