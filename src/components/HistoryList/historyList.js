import React from 'react';
import PropTypes from 'prop-types';
import HistoryCard from '../HistoryCard/historyCard';

const History = ({ history }) => {
  const historyElements = history.map(historyItem => (
    <li key={`${historyItem.method}-${historyItem.url}`}>
      <HistoryCard {...historyItem} />
    </li>
  ));

  return (
    <>
      <h1>History:</h1>
      <ul>
        {historyElements}
      </ul>
    </>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string,
    url: PropTypes.string

  }))
};

export default History;
