import React from 'react';
import './EventCard.css';
import moment from 'moment';

const EventCard = props => (
  <div className="card my-3">
    <div className="card-body">
      <div className="row">
        <div className="col-md-8">
          <p className="card-text text-muted">{moment.utc(props.utc_time).format("LLLL")}</p>
          <h4 className="card-title">
            {props.name}
          </h4>
          <p className="card-text">
            {props.children}
          </p>
        </div>
        <div className="col-md-4">
          <img className="my-3" src={props.image} alt="meetup" />
          <h5 className="card-text" style={{fontWeight: "bold"}}>{props.venue_name}</h5>
          <p className="card-text">{props.venue_street} • {props.venue_city}, {props.venue_state}</p>
          <p className="card-text">{props.rsvpcount} people are going to this event!</p>
        </div>
      </div>
    </div>
  </div>
);

export default EventCard;