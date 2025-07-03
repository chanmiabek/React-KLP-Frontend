import React from 'react';
import StarRating from './StarRating';

const StarSelect = () => {

    return (
        <>
    <div className="container my-5">
        <div className="row text-center">
        <div className="col-md-4 mb-3">
            <StarRating rating={4.8} reviews={135} />
        </div>
        <div className="col-md-4 mb-3">
            <StarRating rating={4.88} reviews={60} />
        </div>
        <div className="col-md-4 mb-3">
            <StarRating rating={5.0} reviews={24} />
        </div>
        </div>
    </div>
    </>
    );
};

export default StarSelect;
