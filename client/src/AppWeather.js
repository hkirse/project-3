import React from 'react';
import WeatherTile from './components/WeatherTile';
import $ from 'jquery';



const wAPI = "13f4905ccb7dad734d30e1ceffcad8ad";

const queryURL = `https://api.darksky.net/forecast/${wAPI}/35.925942,-79.038271?exclude=hourly,minutely,currently`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherForecast: []
    };
  }
  
  componentDidMount() {

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        this.setState({ weatherForecast: json.daily.data })
      }.bind(this)).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <div className="weather">
        <WeatherTile weather={this.state.weatherForecast} />
      </div>
    )}
  }  

export default App;

