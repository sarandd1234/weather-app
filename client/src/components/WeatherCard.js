import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <p>{weather.description}</p>
      <p>{weather.temperature}</p>
      <p>Humidity: {weather.humidity}</p>
      <img src={weather.icon} alt="weather icon" />
    </div>
  );
};

export default WeatherCard;