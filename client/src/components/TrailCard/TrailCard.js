import React from "react";
import "./TrailCard.css";
import API from "../../utils/API";

const TrailCard = props => (

  <div className="card card-trail m-2">
    <div className="card-body d-flex flex-column">

      <h4 className="card-title">{props.name}</h4>
      <img className="mb-3 rounded img-responsive" src={props.image} alt={props.name} />
      <p className="card-text"><b>Location: </b>{props.location}</p>
      <p className="card-text"><b>Trail Length: </b>{props.length} miles</p>
      <p className="card-text"><b>Trail Summary: </b>{props.summary}</p>
      <p className="card-text"><b>Trail Rating: </b>{props.stars}</p>
      <p className="card-text"><b>Difficulty:  </b>
        {(() => {
          switch (props.difficulty) {
            case "green":       return <img className="mb-3 diff" src="https://cdn.apstatic.com/img/diff/green.svg" alt="green" />;
            case "greenBlue":   return <img className="mb-3 diff" src="https://cdn.apstatic.com/img/diff/greenBlue.svg" alt="greenBlue" />;
            case "blue":        return <img className="mb-3 diff" src="https://cdn.apstatic.com/img/diff/blue.svg" alt="blue" />;
            case "blueBlack":   return <img className="mb-3 diff" src="https://cdn.apstatic.com/img/diff/blueBlack.svg" alt="blueBlack" />;
            case "black":       return <img className="mb-3 diff" src="https://cdn.apstatic.com/img/diff/black.svg" alt="black" />;
            case "dblack":      return <img className="mb-3 diff" src="https://cdn.apstatic.com/img/diff/dblack.svg" alt="dblack" />;
            default:            return (props.difficulty);
          }
        })()}
      </p>
      <a href={props.url} role="button" className="btn btn-info" target="_blank">View trail on MTB Project</a>
      {/* TODO: do the right thing with the onClick event */}
      <a onClick={API.saveTrail} role="button" className="btn btn-outline-secondary mt-3">Save Trail</a>
    </div>
  </div>


);

export default TrailCard;
