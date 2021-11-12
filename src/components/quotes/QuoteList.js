import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

// sorting function
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortAscending);

  const changeSortHandler = () => {
    navigate({
      pathname: location.pathname,
      search: `?sort=${isSortAscending ? 'desc' : 'asc'}`,
    });
    // navigate(
    //   `${location.pathname}?sort=` + (isSortAscending ? 'desc' : 'asc'),
    //   {
    //     replace: true,
    //   }
    // );
  };

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}>
          Sort {isSortAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
