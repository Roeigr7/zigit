import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';

export interface ILoginInput {
  email: string;
  password: string;
}

export const tryLogin = (formInput: ILoginInput) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.TRY_LOGIN });
    try {
      const { data } = await axios.post(
        'https://private-052d6-testapi4528.apiary-mock.com/authenticate',
        {
          email: formInput.email,
          password: formInput.password,
        }
      );

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
    } catch (err) {
      dispatch({ type: ActionType.LOGIN_ERROR, payload: err.message });
    }
  };
};
