import React, { Component } from "react";
import HomeCard from '../../components/HomeCard';
import API from '../../utils/API';
import Jumbotron from '../../components/Jumbotron';
import Title from '../../components/Title';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      events: []
    };
  }

  componentDidMount() {
    API.getEvents()
      .then((json) => {
        const trendArr = json.data.results.sort((a, b) => {
          return a.rsvpcount - b.rsvpcount;
        }).reverse().filter((e, i) => i < 3)
        this.setState({
          error: null,
          events: trendArr
        });
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          events: [],
          error
        });
      })
  }

  render() {
    const { error, events } = this.state;
    const array = this.state.events;

    // Log it out!
    if (events[0]) {
      console.log(events);
    }

    if (error) {

    } else {
      return (
        <div>
          <Jumbotron />
          <div className="container-fluid">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  About Us
                </h4>
                <div className="card-text">
                  CrankHeads is a site dedicated to bringing together the North Carolina mountain biking community. Our goal is to provide a space for mountain bikers to find rides, trails, meet-ups and also track your personal riding history.
                  Sign up now by clicking the Login button and registering!
                </div>
              </div>
            </div>
            <Title>Most Popular Upcoming Events</Title>
            <div className="row h-100">
              <div className="card-deck mx-1">
                {array.map(event => (
                  <HomeCard
                    key={event.id}
                    name={event.name}
                    image={event.photo_url}
                    time={(event.utc_time) / 1000}
                    venue_name={event.venue_name}
                    venue_street={event.venue_address1}
                    venue_city={event.venue_city}
                    venue_state={event.venue_state}
                    venue_zip={event.venue_zip}
                    rsvpcount={event.rsvpcount}
                    link={event.event_url}
                  >
                  </HomeCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;