import React from 'react';
import { Link } from 'react-router-dom';
import BuyButton from './buttons/BuyButton';

const PhonePreview = ({ phone }) => {
  const { id, imageUrl, name, snippet } = phone;

  return (
    <article className="item">
      <div>
        <Link to={`phones/${id}`}>
          <img src={imageUrl} alt="" className="item__img" />
          <div className="item__title">{name}</div>
          <div className="item__description">{snippet}</div>
        </Link>
      </div>
      <BuyButton phone={phone} />
    </article>
  );
};

export default PhonePreview;
