import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Filter from './components/Filter';
import CountryList from './components/CountryList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div className='App'>
      <Filter filter={filter} setFilter={setFilter} />
      <CountryList
        filter={filter}
        setFilter={setFilter}
        countries={countries}
      />
    </div>
  );
};

export default App;
