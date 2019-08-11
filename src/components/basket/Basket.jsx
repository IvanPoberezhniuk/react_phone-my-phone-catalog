import React, { useContext } from 'react';
import BasketContext from './BasketContext';

const Basket = () => {
  const getBasketContext = useContext(BasketContext);
  return (
    <>
      <img src="img/basket_icon.svg" alt="Basket" className="basket" />
      <div className="basket__count">{getBasketContext.totalCount}</div>
    </>
  );
};

export default Basket;
