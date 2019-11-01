import React from 'react';
import PropTypes from 'prop-types';

export default function BodyDisplay({ response }) {

  return (
    <>
      <section>{response}</section>
    </>
  );
}

BodyDisplay.propTypes = {
  response: PropTypes.string.isRequired
};
