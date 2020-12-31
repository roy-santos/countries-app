import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <strong>Find Country:</strong>{' '}
      <input value={filter} onChange={handleFilter} />
    </div>
  );
};

export default Filter;
