import { ActionType } from '../action-types';
import { Action } from '../actions';

interface IUser {
  token?: string;
  details?: object;
}
interface LoginState {
  loading: boolean;
  error: string | null;
  user: IUser;
}

const initialState = {
  loading: false,
  error: null,
  user: JSON.parse(sessionStorage.getItem('token') || '{}'),
};

const LoginReducer = (
  state: LoginState = initialState,
  action: Action
): LoginState => {
  switch (action.type) {
    case ActionType.TRY_LOGIN:
      return {
        error: null,
        loading: true,
        user: {},
      };
    case ActionType.LOGIN_ERROR:
      return {
        error: action.payload,
        loading: false,
        user: {},
      };
    case ActionType.LOGGED_USER:
      return {
        error: null,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
