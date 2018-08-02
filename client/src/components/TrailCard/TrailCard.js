import React from "react";
import "./TrailCard.css";
import API from "../../utils/API";
import StarRatings from 'react-star-ratings';
import {getUserData} from "../../libs/authenticate"

const TrailCard = props => {
  const user=getUserData();
  const disabled=(Object.keys(user).length === 0 ? "disabled" : "" )
  const trailData = {
    name: props.name,
    location: props.location,
    length: props.length,
    rating: props.stars,
    difficulty: props.difficulty,
    image: props.image,
    url: props.url
  }

  return (
    <div className="card card-trail m-2">
      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{props.name}</h4>
        <img className="mb-3 rounded img-responsive" src={props.image} alt={props.name} />
        <p className="card-text"><b>Location: </b>{props.location}</p>
        <p className="card-text"><b>Trail Length: </b>{props.length} miles</p>
        <p className="card-text"><b>Trail Summary: </b>{props.summary}</p>
          <span className="card-text mb-3"><b>Trail Rating: </b>
          <StarRatings
            starRatedColor="orange"
            numberOfStars={5}
            name='rating'
            starDimension="25px"
            starSpacing="2px"
            rating={props.stars}
          />
          <b>  ({props.stars})</b></span>
        <p className="card-text"><b>Difficulty:  </b>
          {(() => {
            switch (props.difficulty) {
              case "green": return <img className="diff" src="https://cdn.apstatic.com/img/diff/green.svg" alt="green" />;
              case "greenBlue": return <img className="diff" src="https://cdn.apstatic.com/img/diff/greenBlue.svg" alt="greenBlue" />;
              case "blue": return <img className="diff" src="https://cdn.apstatic.com/img/diff/blue.svg" alt="blue" />;
              case "blueBlack": return <img className="diff" src="https://cdn.apstatic.com/img/diff/blueBlack.svg" alt="blueBlack" />;
              case "black": return <img className="diff" src="https://cdn.apstatic.com/img/diff/black.svg" alt="black" />;
              case "dblack": return <img className="diff" src="https://cdn.apstatic.com/img/diff/dblack.svg" alt="dblack" />;
              default: return (props.difficulty);
            }
          })()}
        </p>
        <p className="card-text"><b>Conditions:  </b>
          {(() => {
            switch (props.conditionStatus) {
              case "All Clear": return <img className="cond" src="https://cdn.apstatic.com/img/conditions/green.svg" alt="clear" />;
              case "Minor Issues": return <img className="cond" src="https://cdn.apstatic.com/img/conditions/yellow.svg" alt="minor issues" />;
              case "Bad / Closed": return <img className="cond" src="https://cdn.apstatic.com/img/conditions/red.svg" alt="bad/closed" />;
              case "Unknown": return <img className="cond" src="https://cdn.apstatic.com/img/conditions/empty.svg" alt="bad/closed" />;
              default: return (props.conditionStatus);
            }
          })()}
        </p>
        <a href={props.url} role="button" className="btn btn-info" target="_blank">View trail on MTB Project</a>
        {window.location.pathname==="/personal"?"":(
        <a onClick={() => { API.saveTrail(trailData,user._id) }} role="button" className={`btn btn-outline-secondary mt-3 ${disabled}`}>Save Trail</a>
      )}
      </div>
    </div>
  );
};

export default TrailCard;
