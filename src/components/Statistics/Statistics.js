import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <section>
    <p>
      <span>Good: {good}</span>
    </p>
    <p>
      <span>Neutral: {neutral}</span>
    </p>
    <p>
      <span>Bad: {bad}</span>
    </p>
    <p>
      <span>Total: {total}</span>
    </p>
    <p>
      <span>Positive feedback: {positivePercentage} %</span>
    </p>
  </section>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
