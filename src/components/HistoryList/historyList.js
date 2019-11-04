import React from 'react';
import PropTypes from 'prop-types';
import HistoryCard from '../HistoryCard/HistoryCard';

const History = ({ history }) => {
  const historyElements = history.map((historyItem, i) => (
    <HistoryCard key={i}{...historyItem} />
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
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired

  }))
};

export default History;
