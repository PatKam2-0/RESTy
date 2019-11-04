import React from 'react';
import PropTypes from 'prop-types';

export default function BodyDisplay({ apiResponses }) {

  return (
    <>
      <p>
        Response: {JSON.stringify(apiResponses, null, 2)}
      </p>
    </>
  );
}

BodyDisplay.propTypes = {
  apiResponses: PropTypes.array
};
