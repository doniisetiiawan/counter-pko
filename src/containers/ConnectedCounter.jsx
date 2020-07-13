import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Counter from '../components/Counter';
import { increment, decrement, reset } from '../actions';
import { redo, undo } from '../undoable';

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
