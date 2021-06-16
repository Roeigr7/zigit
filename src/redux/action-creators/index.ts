import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';

export interface ILoginInput {
  email: string;
  password: string;
}
const AUTHENTICATE_URL =
  'https://private-052d6-testapi4528.apiary-mock.com/authenticate';
export const tryLogin = (formInput: ILoginInput, history: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.TRY_LOGIN });
    try {
      const { data } = await axios.post(AUTHENTICATE_URL, {
        email: formInput.email,
        password: formInput.password,
      });
      dispatch({
        type: ActionType.LOGGED_USER,
        payload: { token: data[0].token, details: data[0].personalDetails },
      });
      sessionStorage.setItem(
        'token',
        JSON.stringify({
          token: data[0].token,
          details: data[0].personalDetails,
        })
      );
      history.push('/info');
    } catch (err) {
      dispatch({ type: ActionType.LOGIN_ERROR, payload: err.message });
    }
  };
};
