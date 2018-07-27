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
      isLoaded: false,
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
          isLoaded: true,
          events: trendArr
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
        <div>
          <Jumbotron />
          <div className="container">
            <Title />
            <div className="row h-100">
              <div className="card-deck">
                {array.map(event => (
                <HomeCard
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