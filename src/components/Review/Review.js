import React, { useState } from "react";
import './Review.scss'

const Review = () => {
  return (
    <div class="container">
      <div class="feedback">
        <div class="rating">
          <input type="radio" name="rating" id="rating-5" />
          <label for="rating-5"></label>
          <input type="radio" name="rating" id="rating-4" />
          <label for="rating-4"></label>
          <input type="radio" name="rating" id="rating-3" />
          <label for="rating-3"></label>
          <input type="radio" name="rating" id="rating-2" />
          <label for="rating-2"></label>
          <input type="radio" name="rating" id="rating-1" />
          <label for="rating-1"></label>
        </div>
      </div>
    </div>
  );
};

export default Review;
