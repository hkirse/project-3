import React, { Component } from 'react';
import axios from 'axios';
import TrailCard from "./components/TrailCard";
import TrailWrapper from "./components/TrailWrapper";
import Title from "./components/Title";
import cities from "./cities.json";

const key = '200314086-a6397adc73378ff9a37d61db5ae8145e';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trails: [],
      isLoading: false,
      error: null,
      cities,
      selectedOption: null,
      lat: 0,
      long: 0,
      distance: 100,
      difficulty: null,
      selectedCity: ''
    };
  }

  handleChangeCity = (event) => {
    // console.log("The event target is: " + event.target.value);
    const selectedCity = event.target.value;
    console.log("the selectedCity is: " + selectedCity);
    const cityGeo = cities.filter(e => e.city === selectedCity);
    const newLong = JSON.stringify(cityGeo[0].longitude);
    const newLat = JSON.stringify(cityGeo[0].latitude);
    this.setState({ long: newLong });
    this.setState({ lat: newLat });
    // console.log(`the new longitude is: ` + newLong);
    // console.log(`the new latitude is: ` + newLat); 
  }

  handleChangeDistance = (event) => {
    const selectedDist = event.target.value;
    console.log("This is the selected distance: " + selectedDist);
    this.setState({ distance: selectedDist });
  }

  handleChangeDifficulty = (event) => {
    const selectedDiff = event.target.value;
    console.log("This is the selected difficulty: " + selectedDiff);
    this.setState({ difficulty: selectedDiff });
  }

  handleSubmit = selectedOption => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    selectedOption.preventDefault();
    const lat = this.state.lat;
    const long = this.state.long;
    const distance = this.state.distance;

    axios.get(`https://www.mtbproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=${distance}&maxResults=16&minStars=2&key=${key}`)
      .then(result =>
        this.setState({
          trails: result.data.trails,
        }))
      .catch(error => this.setState({
        error,
      }));
  }


  render() {
    return (
      <div>
        <label>Select the nearest city for trails to ride: </label>
        <select onChange={this.handleChangeCity} value={this.state.city}>
          {this.state.cities.map(e =>
            (<option value={e.city} key={e.id}>
              {e.city}</option>
            ))}
        </select>
        <label>Level of Desired Difficulty
        <select id="selectedDiff" onChange={this.handleChangeDifficulty}>
            <option id="easy" value="green">Easy</option>
            <option id="beginner" value="greenBlue" selected="selected">Beginner</option>
            <option id="intermediate" value="blue">Intermediate</option>
            <option id="advanced" value="blueBlack">Advanced</option>
            <option id="Expert" value="dblack">Expert</option>
          </select>
        </label>
        <label>Maximum Distance (in miles)
        <select id="selectedDist" onChange={this.handleChangeDistance}>
            <option id="10" value="10">10</option>
            <option id="20" value="20">20</option>
            <option id="30" value="30">30</option>
            <option id="40" value="40">40</option>
            <option id="50" value="50">50</option>
          </select>
        </label>
        <button onClick={this.handleSubmit} id={this.state.id} key={this.state.key}>Submit</button>
        <TrailWrapper>
          <Title>Trails List</Title>
          {this.state.trails.map(trail => (
            <TrailCard
              id={trail.id}
              key={trail.id}
              name={trail.name}
              image={trail.imgMedium}
              difficulty={trail.difficulty}
              location={trail.location}
              summary={trail.summary}
              length={trail.length}
              stars={trail.stars}
              url={trail.url}
            />
          ))}
        </TrailWrapper>
      </div>
    );
  }
}

export default App;