import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: {
    email: string,
    userId: string,
    token: string,
    expirationDate: Date
  };
}

const initialState: State = {
  user: null
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = {
          email: action.payload.email,
          userId: action.payload.userId,
          token: action.payload.token,
          expirationDate: action.payload.expirationDate
      };
      return {
        ...state,
        user
      };
    case AuthActions.LOGOUT:
      return{
        ...state,
        user: null
      };
    default:
    return state;

  }
}
