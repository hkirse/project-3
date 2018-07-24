import React from 'react';
import './EventCard.css';
import moment from 'moment';

//TODO: Handle addresses that aren't present in JSON if time

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
          <h5 className="card-text" style={{fontWeight: "bold"}}><i className="fa fa-map-marker" aria-hidden="true"></i> {props.venue_name}</h5>
          <p className="card-text" style={{fontSize: "1.05rem"}}>{props.venue_street} • {props.venue_city}, {props.venue_state}</p>
          <p className="card-text" style={{fontSize: "1.05rem"}}>{props.rsvpcount} people are going to this event!</p>
          <a href={props.link} style={{color: "white"}} role="button" className="my-3 btn btn-lg btn-block btn-info">Go to event page</a>
        </div>
      </div>
    </div>
  </div>
);

export default EventCard;