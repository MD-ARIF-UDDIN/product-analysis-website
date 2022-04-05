import React from "react";
import "./Review.css";

const Review = (props) => {
  const { name, review, rating } = props.review;

  return (
    <div className="card-container container m-5 p-5 rounded shadow-lg text-black">
      <h4 className="reviewer-name">{name}</h4>
      <p>{review}</p>
      <h5>Rating:{rating}</h5>
    </div>
  );
};

export default Review;
