import React from 'react';
import CountUp from 'react-countup';

const CounterSection = () => {
    return (
    <div className="container my-5 py-5 bg-light rounded text-center">
        <div className="row">
        <div className="col-md-3 mb-4">
            <h2 className="text-primary">
            <CountUp end={1200} duration={3} />
            </h2>
            <p>Students Enrolled</p>
        </div>
        <div className="col-md-3 mb-4">
            <h2 className="text-primary">
            <CountUp end={80} duration={3} />
            </h2>
            <p>Courses Offered</p>
        </div>
        <div className="col-md-3 mb-4">
            <h2 className="text-primary">
            <CountUp end={15} duration={3} />
            </h2>
            <p>Instructors</p>
        </div>
        <div className="col-md-3 mb-4">
            <h2 className="text-primary">
            <CountUp end={5} duration={3} />
            </h2>
            <p>Years Serving</p>
        </div>
    </div>
    </div>
    );
};

export default CounterSection;
