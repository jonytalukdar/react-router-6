import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="centered">
      <h1>Page Not Found 404</h1>
      <Link className="btn">Go Home</Link>
    </div>
  );
};

export default PageNotFound;
