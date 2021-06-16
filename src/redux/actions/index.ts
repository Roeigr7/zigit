import { ActionType } from '../action-types';

interface TryLogin {
  type: ActionType.TRY_LOGIN;
}

interface LoginError {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}
interface LoggedUser {
  type: ActionType.LOGGED_USER;
  payload: object;
}
export type Action = TryLogin | LoginError | LoggedUser;
