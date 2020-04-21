import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import nameReducer from './nameReducer';

const rootReducer = combineReducers({
  counterReducer,
  nameReducer,
});

export default rootReducer;
