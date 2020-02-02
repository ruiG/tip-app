import React, { useState } from "react";
import './Review.scss'

const Review = () => {
  return (
    <div className="container">
      <div className="feedback">
        <div className="rating">
          <input type="radio" name="rating" id="rating-5" />
          <label htmlFor="rating-5"></label>
          <input type="radio" name="rating" id="rating-4" />
          <label htmlFor="rating-4"></label>
          <input type="radio" name="rating" id="rating-3" />
          <label htmlFor="rating-3"></label>
          <input type="radio" name="rating" id="rating-2" />
          <label htmlFor="rating-2"></label>
          <input type="radio" name="rating" id="rating-1" />
          <label htmlFor="rating-1"></label>
        </div>
      </div>
    </div>
  );
};

export default Review;
