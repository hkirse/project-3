import React, { Component } from "react";
import EventCard from '../../components/EventCard';
import API from '../../utils/API';


class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      events: []
    };
  }

  componentDidMount() {
    API.getEvents()
      .then((json) => {
        this.setState({
          error: null,
          isLoaded: true,
          events:json.data.results
        });
      })
      .catch((error) => {  
        console.log(error)
        this.setState({
          events:[],
          isLoaded: true,
          error
        });
      })
  }

  render() {
    const { error, isLoaded, events } = this.state;
    const array = this.state.events;

    const regex = /(<([^>]+)>)/ig;
    
    // Log it out!
    if (events[0]) {
      console.log(events);
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container-fluid">
          {array.map(event => (
          <EventCard
            key={event.id}
            name={event.name}
            image={event.photo_url}
            time={(event.utc_time)/1000}
            venue_name={event.venue_name}
            venue_street={event.venue_address1}
            venue_city={event.venue_city}
            venue_state={event.venue_state}
            venue_zip={event.venue_zip}
            rsvpcount={event.rsvpcount}
            link={event.event_url}
          >
            {event.description.replace(regex, '')}
          </EventCard>
          ))}
        </div>
      );
    }
  }
}

export default Connect;