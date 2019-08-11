import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BasketContext from './basket/BasketContext';

const BasketPage = () => {
  const getBasketContext = useContext(BasketContext);

  return (
    <>
      {getBasketContext.totalCount ? (
        <table className="basket-table">
          <tbody>
            {getBasketContext.itemsInBasket.map((item, index) => (
              <tr className="basket-table__item" key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    to={`/phones/${item.id}`}
                    className="basket-table__link-to-item "
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="basket-table__img"
                    />
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/phones/${item.id}`}
                    className="basket-table__link-to-item "
                  >
                    {item.name}
                  </Link>
                </td>
                <td className="basket-table__count-cell">
                  <button
                    type="button"
                    className="myFancyButton"
                    onClick={() => getBasketContext.decreaseCount(item.id)}
                  >
                    -
                  </button>
                  <div>{item.count}</div>
                  <button
                    type="button"
                    className="myFancyButton"
                    onClick={() => getBasketContext.increaseCount(item.id)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="myFancyButton myFancyButton--warning"
                    onClick={() => getBasketContext.removeFromBasket(item.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="basket__empty">Empty</p>
      )}
    </>
  );
};

export default BasketPage;
