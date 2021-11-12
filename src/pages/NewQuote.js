import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useNavigate } from 'react-router-dom';

const NewQuote = () => {
  const navigate = useNavigate();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    navigate('/quotes', { replace: true });
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
