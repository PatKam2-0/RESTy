import React from 'react';
import PropTypes from 'prop-types';

export default function BodyDisplay({ response }) {

  return (
    <>
      <p>
        Response: {JSON.stringify(response, null, 2)}
      </p>
    </>
  );
}

BodyDisplay.propTypes = {
  response: PropTypes.array
};
