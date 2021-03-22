import { userActionTypes } from "./userActionTypes";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const GoogleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});
export const GoogleSignInSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});
export const GoogleSignInFailure = (error) => ({
  type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error,
});

export const EmailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});
export const EmailSignInSuccess = (user) => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});
export const EmailSignInFailure = (error) => ({
  type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error,
});
