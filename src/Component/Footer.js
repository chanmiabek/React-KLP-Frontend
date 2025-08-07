// src/components/Footer.js
import './Footer.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
        <footer className="footer-klp bg-dark text-white py-4 mt-auto"> {/* Reduced py-5 to py-4 */}
            <div className="container">
                <div className="row gy-4 text-start">

                    {/* About / Logo */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="fw-bold text-white mb-3">KAKUMA LEARNING PLATFORM</h4>
                        <p className="small text-white">
                            Empowering learners in Kakuma and beyond. Access education, grow skills,
                            and connect with instructors anytime, anywhere.
                        </p>
                        <div className="language-selector mt-3">
                            <label htmlFor="language" className="form-label small text-muted me-2">🌐 Language:</label>
                            <select
                                id="language"
                                className="form-select form-select-sm bg-dark text-white border-secondary"
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
                    <div className="col-lg-2 col-md-6">
                        <h5 className="fw-semibold mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/course" className="footer-link">Courses</Link></li>
                            <li><Link to="/about" className="footer-link">About Us</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact</Link></li>
                            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Our Features/Services */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="fw-semibold mb-3">Our Features</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/course" className="footer-link">Online Courses</Link></li>
                            <li><Link to="/features/expert-instructors" className="footer-link">Expert Instructors</Link></li>
                            <li><Link to="/features/certification" className="footer-link">Certifications</Link></li>
                            <li><Link to="/forum" className="footer-link">Community Forum</Link></li>
                            <li><Link to="/features/support" className="footer-link">24/7 Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="fw-semibold mb-3 text-white">Get in Touch</h5>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center mb-2">
                                <FaMapMarkerAlt className="me-2 text-white" />
                                <span className="small text-white">Kakuma, Turkana County, Kenya</span>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaEnvelope className="me-2 text-white" />
                                <a href="info@klp.org" className="footer-link small">info@klp.org</a>
                            </li>
                            <li className="d-flex align-items-center">
                                <FaPhone className="me-2 text-white" />
                                <a href="tel:+25792244883" className="footer-link small">+254 792244883</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter & Socials */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="fw-semibold mb-3 text-white" >Stay Updated</h5>
                        <p className="small text-white">Subscribe to our newsletter for the latest updates.</p>
                        <form className="mb-3">
                            <div className="input-group input-group-sm">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="form-control bg-dark text-white border-secondary"
                                    aria-label="Your email"
                                />
                                <button type="submit" className="btn btn-primary">
                                    Subscribe
                                </button>
                            </div>
                        </form>

                        <div className="social-icons d-flex justify-content-start gap-3 mt-3">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer-icon"><FaFacebook /></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer-icon"><FaTwitter /></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer-icon"><FaInstagram /></a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="footer-icon"><FaYoutube /></a>
                        </div>
                    </div>

                    
                </div>

                <hr className="border-white mt-4 mb-3" />
                <p className="text-center mb-0 small text-white">
                    &copy; {new Date().getFullYear()} Kakuma Learning Platform. All rights reserved.
                </p>
            </div>

            {/* Back to Top */}
            {showTopBtn && (
                <button className="back-to-top-btn btn btn-white rounded-circle" onClick={scrollToTop} title="Back to top" aria-label="Back to top">
                    <FaArrowUp />
                </button>
            )}
        </footer>
    );
};

export default Footer;