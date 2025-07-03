import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
    return (
    <div className="container my-5">
        <h3 className="text-center mb-4">What Our Students Say</h3>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner text-center">
            <div className="carousel-item active">
            <blockquote>"This platform changed my life. I gained skills and confidence!"</blockquote>
            <footer>- Amina L., Student</footer>
            </div>
            <div className="carousel-item">
            <blockquote>"I got a job thanks to the training I received at KLP."</blockquote>
            <footer>- John M., Graduate</footer>
            </div>
            <div className="carousel-item">
            <blockquote>"As an instructor, I’m proud to help my community grow."</blockquote>
            <footer>- Sarah K., Instructor</footer>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" />
        </button>
        </div>
    </div>
    );
};

export default Carousel;
