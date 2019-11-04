import React from 'react';
import PropTypes from 'prop-types';
import styles from './BodyDisplay.css';

export default function BodyDisplay({ apiResponses }) {

  return (
    <>
      <section className={styles}>
        <p>
          Response: {JSON.stringify(apiResponses, null, 0)}
        </p>
      </section>
    </>
  );
}

BodyDisplay.propTypes = {
  apiResponses: PropTypes.array
};
