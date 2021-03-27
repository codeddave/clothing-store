import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.util";
import {
  SignInSuccess,
  SignInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess,
} from "./userAction";
import { userActionTypes } from "./userActionTypes";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapShot = yield userRef.get();
    yield put(SignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(SignInFailure(error));
  }
}
export function* googleSignInSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* googleSignInStartSaga() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignInSaga);
}

export function* emailSignInSaga({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* emailSignInStartSaga() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, emailSignInSaga);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* checkUserSessionSaga() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutSaga() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

export function* signOutStartSaga() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOutSaga);
}

export function* signInAfterSignUpSaga({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}
export function* signUpSaga({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* onsignUpSuccessSaga() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUpSaga);
}
export function* signUpStartSaga() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpSaga);
}
export function* userSagas() {
  yield all([
    call(googleSignInStartSaga),
    call(emailSignInStartSaga),
    call(checkUserSessionSaga),
    call(signOutStartSaga),
    call(signUpStartSaga),
    call(onsignUpSuccessSaga),
  ]);
}
