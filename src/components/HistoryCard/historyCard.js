import React from 'react';
import PropTypes from 'prop-types';

export default function HistoryCard({ method, url }) {

  return (
    <>
      <h3>{method}</h3>
      <p>{url}</p>
    </>
  );
}

HistoryCard.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
