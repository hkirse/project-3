import React from "react";
import "./TrailCard.css";
import API from "../../utils/API";

const TrailCard = props => (
  // <div className="card card-trail">
  //   <div className="card-body">
  //     <div className="img-container">
  //       <img alt={props.name} src={props.image} />
  //     </div>
  //     <div className="content">
  //       <Button bsSize="xsmall">Save</Button>
  //       <ul>
  //         <li>
  //           <strong>Trail Name:</strong>
  //           <Button href={props.url} bsStyle="link" target="_blank">{props.name}</Button>
  //         </li>
  //         <li>
  //           <strong>Trail Rating:</strong> {props.stars}
  //         </li>
  //         <li>
  //           <strong>Length of Trail:</strong> {props.length} miles
  //         </li>
  //         <li>
  //           <strong>Level of Difficulty:</strong> {props.difficulty}
  //         </li>
  //         <li>
  //           <strong>Summary:</strong> {props.summary}
  //         </li>
  //         <li>
  //           <strong>Location:</strong> {props.location}
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </div>

  <div className="card card-trail my-2">
    <div className="card-body d-flex flex-column">

      <h4 className="card-title">{props.name}</h4>
      <img className="mb-3 rounded img-responsive" src={props.image} alt={props.name} />
      <p className="card-title"><b>Location: </b>{props.location}</p>
      <p className="card-title"><b>Trail Length: </b>{props.length} miles</p>
      <p className="card-title"><b>Trail Summary: </b>{props.summary}</p>
      <p className="card-text"><b>Trail Rating: </b>{props.stars}</p>
      <p className="card-text"><b>Difficulty: </b>{props.difficulty}</p>
      <a href={props.url} role="button" className="btn btn-info mr-auto" target="_blank">View Trail on MTB Project</a>
      {/* TODO: do the right thing with the onClick event */}
      <a onClick={API.saveEvent} role="button" className="btn ml-auto btn-secondary text-white">Save Trail</a>

    </div>
  </div>


);

export default TrailCard;
