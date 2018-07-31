import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
import WeatherIcon from '../../components/WeatherIcon/WeatherIcon';

class WeatherTile extends Component {

  render() {
    return (
      <div className="weatherFlexContainer">
        {this.props.weather.map(this.renderWeatherTile)}
      </div>
    );
  }

  renderWeatherTile({summary, icon, temperatureMax, temperatureMin, time}) {
    return (
      <div key={time} className="weatherTile">
        <p className="date"><strong>{new Date(time * 1000).toDateString()}</strong></p>
        <WeatherIcon icon={icon} />
        <br></br>
        <p>{summary}</p>
        <span className="temp"><strong>Low:  </strong>{temperatureMin.toFixed(0)}</span><span><WeatherIcons name="degrees" size="lg"/>    </span> 
        <span className="temp"><strong>   High:  </strong>{temperatureMax.toFixed(0)}</span><span><WeatherIcons name="degrees" size="lg" /></span>
      </div>
      )
    }
}

export default WeatherTile;
