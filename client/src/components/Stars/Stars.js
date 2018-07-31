import React from "react";
import './Stars';
import StarRatings from 'react-star-ratings';
import TrailCard from '../TrailCard';

class StarRatings extends React.Component {
changeRating(newRating, name) {
  this.setState({
    rating: rating
  });
}

  render() {
    console.log(props.rating)
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="blue"
        numberOfStars={5}
        name='rating'
      />
    );
  }
}

export default Stars;