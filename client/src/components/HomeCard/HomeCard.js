import React from 'react';
import './HomeCard.css';
import moment from 'moment';

const HomeCard = props => (
  <div className="card h-100">
    <div className="card-body d-flex flex-column">
      <p className="card-text text-muted">{moment.unix(props.time).format("LLLL")}</p>
      <h5 className="card-title">
        {props.name}
      </h5>
      <img className="mb-3 rounded" src={props.image} alt="meetup" />
      <h6 className="card-text"> {props.venue_name}</h6>
      {/* Two ternary operations to parse inconsistent location info */}
      {
        props.venue_street === ""
          ? <p className="card-text"><i className="fa fa-map-marker" aria-hidden="true"></i> Event needs a location...</p>
          : props.venue_street.includes(',')
            ? <p className="card-text"><i className="fa fa-map-marker" aria-hidden="true"></i> {props.venue_street}</p>
            : <p className="card-text"><i className="fa fa-map-marker" aria-hidden="true"></i> {props.venue_street} • {props.venue_city}, {props.venue_state} {props.venue_zip}</p>
      }
      <h5 className="card-text mb-3">{props.rsvpcount} people are going to this event!</h5>
      <a href={props.link} role="button" className="mt-auto btn btn-block btn-info">Visit the event page</a>
    </div>
  </div>

);

export default HomeCard;