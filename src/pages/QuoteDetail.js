import React from 'react';
import {
  Routes,
  Route,
  useParams,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
  { id: 1, author: 'Joney', text: 'Learning React is Awesome' },
  {
    id: 2,
    author: 'jerry',
    text: 'JavaScript is Awesome to Learn',
  },
];

const QuoteDetail = () => {
  const location = useLocation();
  const { id } = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === parseInt(id));

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <HighlightedQuote quote={quote} />

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
