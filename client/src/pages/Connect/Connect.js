import React, { Component } from "react";
//FIXME:import EventCard from '../../components/EventCard';

// const API_KEY = "7dc5e202b7b3ee7419e3d42654353"; ***obtained API key from website***

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
    fetch("https://api.meetup.com/torc-nc/events?photo-host=public&page=20&sig_id=259358047&sig=01606d3709043fff8d5efc612870ea93595c5177")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          error: null,
          isLoaded: true,
          events: result
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
    // Log it out!
    console.log(events);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        // <EventCard
          <ul>
            {events.map(event => (
              <li key={event.id}>
                {event.name}
              </li>
            ))}
          </ul>
        // />
      );
    }
  }
}

export default Connect;