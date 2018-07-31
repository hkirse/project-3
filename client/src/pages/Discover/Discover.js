import React, { Component } from 'react';
import TrailCard from "../../components/TrailCard";
import Title from "../../components/Title";
import cities from "../../cities.json";
import API from "../../utils/API";
// import Jumbotron from '../../components/Jumbotron';


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
      distance: 1,
      difficulty: null,
      selectedCity: ''
    };
  }

  handleChangeCity = (event) => {
    const selectedCity = event.target.value;
    console.log("the selectedCity is: " + selectedCity);
    const cityGeo = cities.filter(e => e.city === selectedCity);
    const newLong = JSON.stringify(cityGeo[0].longitude);
    const newLat = JSON.stringify(cityGeo[0].latitude);
    this.setState({ long: newLong });
    this.setState({ lat: newLat });
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
        <div>
          <div className="container-fluid">
          <iframe title = "mtb" style={{width:"100%", maxWidth:"1200px", height:"500px"}} frameborder="0" scrolling="no" src="https://www.mtbproject.com/widget/map?favs=1&location=fixed&x=-8916043&y=4248160&z=6.5&h=500"></iframe>
            <Title>Trails List</Title>
            <form className="form-inline mb-3">
              <div className="form-group mx-auto">
                <label>Select the nearest city for trails to ride: </label>
                <select className="custom-select w-75" onChange={this.handleChangeCity} value={this.state.city}>
                  {this.state.cities.map(e =>
                    (<option value={e.city} key={e.id}>
                      {e.city}</option>
                    ))}
                </select>
              </div>
              <div className="form-group mx-auto">
                <label>Minimum Length (in miles): </label>
                <select className="custom-select w-75" id="selectedDist" onChange={this.handleChangeDistance}>
                <option id="1" value="1">1</option>
                <option id="5" value="5">5</option>
                  <option id="10" value="10">10</option>
                  <option id="15" value="15">15</option>
                  <option id="20" value="20">20</option>
                  <option id="25" value="25">25</option>
                  <option id="30" value="30">30+ (Hurt me!)</option>
                </select>
              </div>
              <button className="btn btn-info mt-auto mx-auto" onClick={this.handleSubmit} id={this.state.id} key={this.state.key}>Submit</button>
            </form>
            <div className="row h-100">
              <div className="card-columns mx-4">
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
      </div>
    );
  }
}

export default Discover;