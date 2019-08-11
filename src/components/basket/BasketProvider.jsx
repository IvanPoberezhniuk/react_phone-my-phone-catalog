import React, { useState, useEffect } from 'react';
import BasketContext from './BasketContext';
import saveDataToLocalStorage from '../../api/helpers';

const BasketProvider = props => {
  const [totalCount, setTotalCount] = useState(0);
  const [itemsInBasket, setItemsInBasket] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    const basketLocalStorage = JSON.parse(
      window.localStorage.getItem('basketLocalStorage')
    );
    if (basketLocalStorage) {
      setTotalCount(basketLocalStorage.totalCount);
      setItemsInBasket(basketLocalStorage.itemsInBasket);
    } else {
      setTotalCount(0);
      setItemsInBasket([]);
    }
  }, []);
  // ComponentDidUpdate
  useEffect(() => {
    saveDataToLocalStorage('basketLocalStorage', {
      totalCount,
      itemsInBasket
    });
  });

  const addItemToBasket = newItem => {
    let isInBasket = itemsInBasket.some(item => item.id === newItem.id);

    if (isInBasket) {
      setItemsInBasket(
        itemsInBasket.map(item => {
          if (item.id === newItem.id) {
            item.count++;
            return { ...item, count: item.count++ };
          } else {
            return item;
          }
        })
      );
    } else {
      setItemsInBasket([...itemsInBasket, { ...newItem, count: 1 }]);
    }

    setTotalCount(totalCount + 1);
  };

  const removeFromBasket = itemId => {
    setItemsInBasket(
      itemsInBasket.filter(item => {
        if (item.id === itemId) {
          setTotalCount(totalCount - item.count);
          return false;
        } else {
          return item;
        }
      })
    );
  };

  const increaseCount = itemId => {
    setItemsInBasket(
      itemsInBasket.map(item => {
        if (item.id === itemId) {
          item.count++;
          setTotalCount(totalCount + 1);
          return item;
        } else {
          return item;
        }
      })
    );
  };

  const decreaseCount = itemId => {
    setItemsInBasket(
      itemsInBasket.map(item => {
        if (item.id === itemId && item.count !== 1) {
          item.count = item.count - 1;
          setTotalCount(totalCount - 1);
          return item;
        } else {
          return item;
        }
      })
    );
  };

  return (
    <BasketContext.Provider
      value={{
        itemsInBasket,
        totalCount,
        addItemToBasket,
        removeFromBasket,
        increaseCount,
        decreaseCount
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
