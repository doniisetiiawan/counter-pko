import PropTypes from 'prop-types';
import React from 'react';

const Counter = ({
  count,
  increment,
  decrement,
  reset,
  undo,
  redo,
}) => (
  <span>
    <b>Counter:</b> {count}{' '}
    <button type="button" onClick={increment}>
      +
    </button>{' '}
    <button type="button" onClick={decrement}>
      -
    </button>{' '}
    <button type="button" onClick={reset}>
      reset
    </button>{' '}
    <button type="button" onClick={undo}>
      undo
    </button>{' '}
    <button type="button" onClick={redo}>
      redo
    </button>
  </span>
);

export default Counter;

Counter.propTypes = {
  count: PropTypes.number,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  count: 0,
};
