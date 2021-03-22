import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.util";
import { userActionTypes } from "./userActionTypes";

export function* googleSignInSaga() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
    console.log(userRef);
  } catch (error) {}
}

export function* googleSignInStartSaga() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignInSaga);
}

export function* userSagas() {
  yield all(call([googleSignInStartSaga]));
}
