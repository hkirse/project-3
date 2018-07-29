import React, { Component } from 'react';
import TrailCard from "../../components/TrailCard";
import Title from "../../components/Title";
import cities from "../../cities.json";
import API from "../../utils/API";
import Jumbotron from '../../components/Jumbotron';


class Discover extends Component {
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
    const data = {
      params: {
        lat: this.state.lat,
        long: this.state.long,
        distance: this.state.distance
      }
    }

    API.getTrails(data)
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
        <Jumbotron />
        <form className="form-inline">
          <div className="form-group mx-auto">

            <label>Select the nearest city for trails to ride: </label>
            <select className="custom-select" onChange={this.handleChangeCity} value={this.state.city}>
              {this.state.cities.map(e =>
                (<option value={e.city} key={e.id}>
                  {e.city}</option>
                ))}
            </select>
          </div>
          <div className="form-group mx-auto">
            <label>Level of Desired Difficulty: </label>
            <select className="custom-select" id="selectedDiff" onChange={this.handleChangeDifficulty} defaultValue="greenBlue">
              <option id="easy" value="green">Easy</option>
              <option id="beginner" value="greenBlue">Beginner</option>
              <option id="intermediate" value="blue">Intermediate</option>
              <option id="advanced" value="blueBlack">Advanced</option>
              <option id="Expert" value="dblack">Expert</option>
            </select>
          </div>
          <div className="form-group mx-auto">
            <label>Maximum Distance (in miles): </label>
            <select className="custom-select" id="selectedDist" onChange={this.handleChangeDistance}>
              <option id="10" value="10">10</option>
              <option id="20" value="20">20</option>
              <option id="30" value="30">30</option>
              <option id="40" value="40">40</option>
              <option id="50" value="50">50</option>
            </select>
          </div>
          <button className="btn btn-info mx-auto mt-auto" onClick={this.handleSubmit} id={this.state.id} key={this.state.key}>Submit</button>
        </form>
        <div className="container-fluid p-4">
          <Title>Trails List</Title>
          <div className="row h-100">
            <div className="card-columns mx-3">
              {this.state.trails.map(trail => (
                <TrailCard
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;