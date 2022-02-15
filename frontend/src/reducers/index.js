import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  errors: errorsReducer
});

export default rootReducer;