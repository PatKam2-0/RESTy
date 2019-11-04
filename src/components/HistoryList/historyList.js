import React from 'react';
import PropTypes from 'prop-types';
import HistoryCard from '../HistoryCard/HistoryCard';
import styles from './HistoryList.css';

const History = ({ history }) => {
  const historyElements = history.map(historyItem => (
    <li key={`${historyItem.method}-${historyItem.url}`}>
      <HistoryCard {...historyItem} />
    </li>
  ));

  return (
    <>
      <section className={styles}>
        <h1>History:</h1>
        <ul>
          {historyElements}
        </ul>
      </section>
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
