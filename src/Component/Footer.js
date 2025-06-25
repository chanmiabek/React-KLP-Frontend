// src/components/Footer.js
import React from 'react';
import './Footer.css'; // We'll create this CSS file next
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <strong>Kakuma Learning Platform</strong> | Empowering Futures Through Education
                <div className="footer-links">
                    <Link to="/">Home</Link> |
                    <Link to="/about">About Us</Link> |
                    <Link to="/courses">Courses</Link> |
                    <Link to="/contact">Contacts</Link> |
                    <Link to="/learnMore">Learn More</Link> |
                </div>
                <p>&copy; 2025 Kakuma Learning Platform. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
