import React from 'react';
import PropTypes from 'prop-types';
import styles from './Body.css';

export default function Body({ children }) {
  return (
    <section className={styles}>{children}</section>
  );
}

Body.propTypes = {
  children: PropTypes.node.isRequired
};


