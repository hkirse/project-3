import React from "react";
import "./TrailCard.css";
import { Button } from 'reactstrap';


const TrailCard = props => (
  <div className="card cardTrail">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <Button bsSize="xsmall">Save</Button>
      <ul>
        <li>
          <strong>Trail Name:</strong>
          <Button href={props.url} bsStyle="link" target="_blank">{props.name}</Button>
        </li>
        <li>
          <strong>Trail Rating:</strong> {props.stars}
        </li>
        <li>
          <strong>Length of Trail:</strong> {props.length} miles
        </li>
        <li>
          <strong>Level of Difficulty:</strong> {props.difficulty}
        </li>
        <li>
          <strong>Summary:</strong> {props.summary}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
  </div>
);

export default TrailCard;