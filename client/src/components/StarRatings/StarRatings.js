import React from "react";
import './Stars';
import StarRatings from 'react-star-ratings';
import 'react-star-rating/dist/css/react-star-rating.min.css'

class Stars extends Component {
  render() {
    // aggregateRating = 2.35;
    return (
      <StarRatings
        rating={props.children}
        starDimension="40px"
        starSpacing="15px"
      />
    );
  }
}

export default Stars;