import React from 'react';
import Weather from './Weather';

const SingleCountry = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>
        <strong>capital:</strong> {country.capital} <br />
        <strong>population:</strong> {country.population}
      </p>
      <h2>languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt='Country Flag' width={'200px'} />
      <Weather country={country} />
    </div>
  );
};

export default SingleCountry;
