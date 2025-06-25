// src/components/HeroSection.js
import React from 'react';
import './Hero.css';
import instructor1 from '../assets/images/instructor1.jpg'; // <-- IMPORTS THE IMAGE!

const Hero = () => {
    // You can pass the image URL as a CSS custom property if you want to
    // make it dynamic, or just use it directly in inline style/CSS
    const hero = {
    backgroundImage: `url(${instructor1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="hero-section" style={hero}> {/* Apply inline style */}
            <div className="hero-content">
                <h1>Your Gateway to Knowledge</h1>
                <p>Empowering the Kakuma community through accessible education.</p>
                <button>Explore Courses</button>
            </div>
        </div>
    );
};

export default Hero;
