import React from "react";
import './Stars';
import StarRatings from 'react-star-ratings';
import 'react-star-rating/dist/css/react-star-rating.min.css'

const StarRatings = props => {
  render() {
    // aggregateRating = 2.35;
    return (
      <StarRatings
        {...props}
      />
    );
  }
}

export default Stars;