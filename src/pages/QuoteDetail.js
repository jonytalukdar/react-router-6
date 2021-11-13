import React, { useEffect } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/hooks/use-http';
import { getSingleQuote } from '../lib/lib/api';

const QuoteDetail = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote);

  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote) {
    return <h3 className="centered">No Quote Found</h3>;
  }

  return (
    <>
      <HighlightedQuote quote={loadedQuote} />

      {location.pathname === `/quotes/${id}` && (
        <div className="centered">
          <Link to={`comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default QuoteDetail;
