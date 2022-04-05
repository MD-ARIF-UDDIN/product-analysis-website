import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-5 container d-flex  align-items-center justify-content-between">
        <div>
          <h1 className="title-home title1-home">Choose Bullet</h1>
          <h1 className="text-danger title-home title2-home">Become Royal</h1>
        </div>
        <div>
          <img
            src="https://images.carandbike.com/bike-images/colors/royal-enfield/bullet-350/royal-enfield-bullet-350-bullet-silver.webp?v=31"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1>Customer Review({reviews.slice(0, 3).length})</h1>
        <div className="review-container container">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <button
          className="see-all-review bg-danger m-5"
          onClick={() => navigate("/reviews")}
        >
          See all reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
