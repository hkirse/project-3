import React, { Component } from "react";

// const API_KEY = "7dc5e202b7b3ee7419e3d42654353"; ***obtained API key from website***

// code from "https://reactjs.org/docs/faq-ajax.html"

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
    fetch("https://api.meetup.com/torc-nc/events?photo-host=public&page=20&sig_id=259358047&sig=c03cc0afa57c58c7b2c36569d72c10144a3bf263")
      .then(res => res.json())
      .then(json => console.log(json))
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            events: result.events
          });
          console.log(result.events);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, events } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {events.map(event => (
            <li key={event.name}>
              {event.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}
// end code from "https://reactjs.org/docs/faq-ajax.html"

export default Connect;