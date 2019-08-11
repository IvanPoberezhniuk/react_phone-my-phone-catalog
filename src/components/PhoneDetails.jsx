import React, { useState, useEffect } from 'react';
import NotFound from './NotFound';
import Loader from './Loader';
import BuyButton from './buttons/BuyButton';

const PhoneDetails = ({ match }) => {
  const [phone, setPhones] = useState(null);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbCurrentImg, setThumbCurrentImg] = useState(0);
  const phoneId = match.params.phoneId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://mate-academy.github.io/phone-catalogue-static/api/phones/${phoneId}.json`
        );
        const phone = await response.json();

        setPhones(phone);
        setIsLoaded(true);
      } catch (err) {
        setError(true);
      }
    };

    fetchData();
  }, [phoneId]);

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      {isLoaded ? (
        <div className="details">
          <section className="phone">
            <img
              src={phone.images[thumbCurrentImg]}
              alt={phone.name}
              className="phone__main-img"
            />
            <h1 className="phone__title">{phone.name}</h1>
            <p className="phone__description">{phone.description}</p>
            <div className="thumb">
              {phone.images.map((img, index) => (
                <img
                  src={img}
                  alt={img}
                  className="thumb__img"
                  key={img}
                  onClick={() => setThumbCurrentImg(index)}
                />
              ))}
            </div>

            <BuyButton phone={phone} />
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PhoneDetails;
