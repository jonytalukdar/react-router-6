import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 1, author: 'Joney', text: 'Learning React is Awesome' },
  {
    id: 2,
    author: 'jerry',
    text: 'JavaScript is Awesome to Learn',
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
