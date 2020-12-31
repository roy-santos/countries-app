import React from 'react';
import MultipleCountries from './MultipleCountries';
import SingleCountry from './SingleCountry';

const CountryList = ({ filter, setFilter, countries }) => {
  if (filter) {
    const filteredResults = countries.filter((country) =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredResults.length > 10) {
      return <div>Too many matches, specify another filter.</div>;
    } else if (filteredResults.length > 1 && filteredResults.length <= 10) {
      return (
        <MultipleCountries countries={filteredResults} setFilter={setFilter} />
      );
    } else if (filteredResults.length === 1) {
      return <SingleCountry country={filteredResults[0]} />;
    } else {
      return <div>No countries found!</div>;
    }
  } else {
    return <></>;
  }
};

export default CountryList;
