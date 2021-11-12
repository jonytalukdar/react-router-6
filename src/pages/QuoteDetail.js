import React from 'react';
import { useParams, Outlet } from 'react-router-dom';

const QuoteDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>QuoteDetail page</h1>
      <h2>{id}</h2>
      <Outlet />
    </div>
  );
};

export default QuoteDetail;
