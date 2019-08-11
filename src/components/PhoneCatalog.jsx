import React, { useState, useMemo, useEffect } from 'react';
import Loader from './Loader';
import PhonePreview from './PhonePreview';
import { fetchPhones } from '../api/requests';
import Filter from './Filter';
import { sortBy } from 'lodash';

const SORT = {
  NEWEST: 'NEWEST',
  ASC: 'ASC'
};

const PhoneCatalog = () => {
  const [phones, setPhones] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [sortType, setSortType] = useState(SORT.ASC);

  // DidUpdate
  useEffect(() => {
    fetchPhones().then(phones => {
      try {
        setPhones(phones);
        setIsLoaded(true);
      } catch (err) {
        setError(true);
      }
    });
  }, []);

  const shownPhones = (phones, searchFieldValue) => {
    if (!searchFieldValue) {
      return phones;
    } else {
      return phones.filter(phone =>
        phone.name
          .replace(/(\s)/gm, '')
          .toLowerCase()
          .includes(searchFieldValue)
      );
    }
  };

  const sortPhones = (data, sortType) => {
    switch (sortType) {
      case SORT.NEWEST:
        return sortBy(data, [item => item.age]);

      case SORT.ASC:
        return sortBy(data, [item => item.name]);
      default:
        return data;
    }
  };
  const filteredPhones = useMemo(() => shownPhones(phones, searchFieldValue), [
    phones,
    searchFieldValue
  ]);

  const visiblePhones = useMemo(() => sortPhones(filteredPhones, sortType), [
    filteredPhones,
    sortType
  ]);

  return (
    <div className="phones__wrapper">
      <Filter
        phones={phones}
        setPhones={setPhones}
        setSortType={setSortType}
        setSearchFieldValue={setSearchFieldValue}
      />
      {isLoaded ? (
        <div className="phones">
          {visiblePhones.map(phone => (
            <PhonePreview key={phone.id} phone={phone} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PhoneCatalog;
