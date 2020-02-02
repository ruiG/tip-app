import React, { useState } from "react";
import "./Review.scss";

const Review = ({ review, onSetReview }) => {
  const handleSetReview = event => {
    console.log(event.target.value)
    onSetReview(event.target.value);
  };
  return (
    <div className="container">
      <div className="feedback">
        <div className="rating" onChange={handleSetReview}> 
          <input
            type="radio"
            name="rating"
            id="rating-5"
            value="5"
          />
          <label htmlFor="rating-5"></label>
          <input
            type="radio"
            name="rating"
            id="rating-4"
            value="4"
          />
          <label htmlFor="rating-4"></label>
          <input
            type="radio"
            name="rating"
            id="rating-3"
            value="3"
          />
          <label htmlFor="rating-3"></label>
          <input
            type="radio"
            name="rating"
            id="rating-2"
            value="2"
          />
          <label htmlFor="rating-2"></label>
          <input
            type="radio"
            name="rating"
            id="rating-1"
            value="1"
          />
          <label htmlFor="rating-1"></label>
        </div>
      </div>
    </div>
  );
};

export default Review;
