import React from 'react';

const Review = (props) => {
    const {name,review,rating}=props.review;

    return (
        <div className="card container mt-5 bg-danger text-white">
            <h4>Name:{name}</h4>
            <h4>{review}</h4>
            <h4>{rating}</h4>
        </div>
    );
};

export default Review;