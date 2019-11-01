import React from 'react';
import PropTypes from 'prop-types';
import HistoryCard from '../HistoryCard/HistoryCard';

const History = ({ history }) => {
  const historyElements = history.map(historyItem => (
    <li key={`${historyItem.method}-${historyItem.url}`}>
      <HistoryCard {...historyItem} />
    </li>
  ));
  return (
    <ul>
      {historyElements}
    </ul>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired

  }))
};

export default History;
