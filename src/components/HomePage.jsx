import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>
        Welcome To Home Page <br />
        <Link to="/phones" className="show-phones">
          Show Phones
        </Link>
      </h1>
    </div>
  );
};

export default HomePage;
