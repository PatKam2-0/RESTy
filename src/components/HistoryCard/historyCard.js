import React from 'react';
import PropTypes from 'prop-types';

export default function HistoryCard({ url, method }) {

  return (
    <>
      <p>{url}</p>
      <p>{method}</p>
    </>
  );
}

HistoryCard.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string
};
