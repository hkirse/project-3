import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';

class WeatherIcon extends Component {

  render() {
      let icon = null;
      if (this.props.icon === "clear-day") {
          icon = <WeatherIcons name="day-sunny" size="2x" />;
      } else if (this.props.icon === "clear-night") {
          icon = <WeatherIcons name="night-clear" size="2x" />;
      } else if (this.props.icon === "rain") {
          icon = <WeatherIcons name="rain" size="2x" />;
      } else if (this.props.icon === "snow") {
          icon = <WeatherIcons name="snow" size="2x" />;
      } else if (this.props.icon === "sleet") {
          icon = <WeatherIcons name="sleet" size="2x" />;
      } else if (this.props.icon === "wind") {
          icon = <WeatherIcons name="cloudy-windy" size="2x" />;
      } else if (this.props.icon === "fog") {
          icon = <WeatherIcons name="fog" size="2x" />;
      } else if (this.props.icon === "cloudy") {
          icon = <WeatherIcons name="cloudy" size="2x" />;
      } else if (this.props.icon === "partly-cloudy-day") {
          icon = <WeatherIcons name="day-sunny-overcast" size="2x" />;
      } else if (this.props.icon === "partly-cloudy-night") {
          icon = <WeatherIcons name="night-alt-cloudy" size="2x" />;
      } else {
          icon = <WeatherIcons name="na" size="2x" />;
      }
    return (
      <div>
        {icon}
      </div>
    );
  }
}

export default WeatherIcon;
