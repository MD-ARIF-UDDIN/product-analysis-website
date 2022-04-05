import React from "react";
import "./Home.css"
const Home = () => {
  return (
    <div className="d-flex  align-items-center">
      <div className="">
        <h1 className="title-home">Choose Bullet</h1>
        <h1 className="text-danger title-home">Become Royal</h1>
      </div>
      <div>
        <img
          src="https://images.carandbike.com/bike-images/colors/royal-enfield/bullet-350/royal-enfield-bullet-350-bullet-silver.webp?v=31"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
