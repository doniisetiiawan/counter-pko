import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Counter from '../components/Counter';
import { increment, decrement, reset } from '../actions';

const mapStateToProps = (state) => {
  const { counter } = state;
  return { count: counter };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { increment, decrement, reset },
  dispatch,
);

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default ConnectedCounter;
