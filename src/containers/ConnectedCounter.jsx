import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from 'redux-undo';
import Counter from '../components/Counter';
import { decrement, increment, reset } from '../actions';

const { undo, redo } = ActionCreators;

const mapStateToProps = (state) => {
  const { counter } = state;

  return { count: counter && counter.present };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    increment,
    decrement,
    reset,
    undo,
    redo,
  },
  dispatch,
);

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default ConnectedCounter;
