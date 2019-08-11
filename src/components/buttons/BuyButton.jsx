import React from 'react';
import BasketContext from '../basket/BasketContext';

const BuyButton = ({ phone }) => {
  return (
    <BasketContext.Consumer>
      {context => (
        <button
          type="button"
          onClick={() => context.addItemToBasket(phone)}
          className="button-buy"
        >
          Buy
        </button>
      )}
    </BasketContext.Consumer>
  );
};

export default BuyButton;
