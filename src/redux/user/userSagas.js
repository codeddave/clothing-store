import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.util";
import { googleSignInFailure, googleSignInSuccess } from "./userAction";
import { userActionTypes } from "./userActionTypes";

export function* googleSignInSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();

    yield put(
      googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* googleSignInStartSaga() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignInSaga);
}

export function* userSagas() {
  yield all([call(googleSignInStartSaga)]);
}
