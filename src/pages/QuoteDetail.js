import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 1, author: 'Joney', text: 'Learning React is Awesome' },
  {
    id: 2,
    author: 'jerry',
    text: 'JavaScript is Awesome to Learn',
  },
];

const QuoteDetail = () => {
  const { id } = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === parseInt(id));

  return (
    <>
      <HighlightedQuote quote={quote} />
      <Outlet />
    </>
  );
};

export default QuoteDetail;
