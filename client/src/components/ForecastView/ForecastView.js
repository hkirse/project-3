import React from 'react';

import './ForecastView.css';

const ForecastView = props => (
		<ol>
			<li>
				<strong>Max temp is:{props.max}</strong>
				<strong>Humidity is this %: {props.humidity}</strong>
				<strong>Sunset is at: {props.sunset}</strong>
			</li>
		</ol>
);

export default ForecastView;
