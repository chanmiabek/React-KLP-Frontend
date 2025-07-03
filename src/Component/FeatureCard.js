import React from 'react';

const features = [
    {
    icon: '📚',
    title: 'Accessible Courses',
    desc: 'Learn anywhere, anytime with low-bandwidth access.'
    },
    {
    icon: '👩‍🏫',
    title: 'Expert Instructors',
    desc: 'Learn from experienced trainers and educators.'
    },
    {
    icon: '💼',
    title: 'Career Skills',
    desc: 'Gain real-world skills to improve job readiness.'
    },
    {
    icon: '🌍',
    title: 'Community Impact',
    desc: 'Designed for and by the Kakuma community.'
    },
];

const FeatureCards = () => {
    return (
    <div className="container my-5">
        <h3 className="text-center mb-4">Why KLP?</h3>
        <div className="row">
        {features.map((f, i) => (
            <div className="col-md-3 mb-4" key={i}>
            <div className="card h-100 shadow-sm text-center hover-zoom">
                <div className="card-body">
                <div className="fs-1 mb-3">{f.icon}</div>
                <h5 className="card-title">{f.title}</h5>
                <p className="card-text">{f.desc}</p>
                </div>
            </div>
        </div>
        ))}
    </div>
    </div>
    );
};

export default FeatureCards;
