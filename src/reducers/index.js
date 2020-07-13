import { combineReducers } from 'redux';

import undoable from 'redux-undo';
import counterReducer from './counter';

const appReducer = combineReducers({
  counter: undoable(counterReducer, { debug: true }),
});

export default appReducer;
