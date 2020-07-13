import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Counter from '../components/Counter';
import {
  increment,
  decrement,
  reset,
  undo,
  redo,
} from '../actions';

const mapStateToProps = (state) => {
  const { counter } = state;
  const { history, currentState } = counter;

  return { count: history[currentState] };
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
