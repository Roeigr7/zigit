import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

const reducers = combineReducers({
  login: LoginReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
