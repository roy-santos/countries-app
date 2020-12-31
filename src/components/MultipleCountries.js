import React from 'react';

const MultipleCountries = ({ countries, setFilter }) => {
  console.log(countries);
  return countries.map((country) => (
    <div key={country.numericCode}>
      {country.name}{' '}
      <button onClick={() => setFilter(country.name)}>show</button>
    </div>
  ));
};

export default MultipleCountries;
