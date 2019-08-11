import React from 'react';
import { withRouter } from 'react-router';

const NotFound = ({ location }) => {
  return (
    <div className="notFound">
      <h1>404 NotFound</h1>
      <h2>{location.pathname}</h2>
    </div>
  );
};

export default withRouter(NotFound);
