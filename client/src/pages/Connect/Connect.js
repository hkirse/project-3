import React, { Component } from "react";
import EventCard from '../../components/EventCard';

const API_KEY = "7523326462482714222e6e5c49322f46";

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
    fetch(`https://api.meetup.com/events?key=${API_KEY}&group_urlname=torc-nc&page=20&sign=true`)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          error: null,
          isLoaded: true,
          events: json.results
        });
      })
      .catch((error) => {
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
            time={event.utc_time}
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