import React from 'react';
import { debounce } from 'lodash';

const SORT = {
  NEWEST: 'NEWEST',
  ASC: 'ASC'
};

const Filter = ({ setSortType, setSearchFieldValue }) => {
  const handleSearchFieldValue = debounce(event => {
    const inputValue = event.target.value.toLowerCase().replace(/(\s)/gm, '');
    setSearchFieldValue(inputValue);
  }, 333);

  const debouncedHandleSearchFieldValue = event => {
    event.persist();
    handleSearchFieldValue(event);
  };

  return (
    <div className="filter">
      <input
        type="search"
        name="serchPhones"
        className="filter__search-field"
        placeholder="Search"
        autoComplete="off"
        onChange={event => debouncedHandleSearchFieldValue(event)}
      />
      <select
        name="direction"
        className="filter__direction"
        onChange={event => setSortType(event.target.value)}
      >
        <option value={SORT.ASC}>A-z</option>
        <option value={SORT.NEWEST}>Newest</option>
      </select>
    </div>
  );
};

export default Filter;
