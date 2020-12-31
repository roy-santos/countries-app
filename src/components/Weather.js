import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_WEATHER_API_KEY,
      query: props.country.capital,
    };
    axios
      .get('http://api.weatherstack.com/current', { params })
      .then((response) => {
        setData(response.data.current);
      });
  }, []);

  return (
    <div>
      <h2>Weather in {props.country.capital}</h2>
      {data ? (
        <>
          <p>
            <strong>temperature:</strong> {data.temperature} celsius
          </p>
          <img src={data.weather_icons[0]} alt='Weather Icon' />
          <p>
            <strong>wind:</strong> {data.wind_speed} mph, direction{' '}
            {data.wind_dir}
          </p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
