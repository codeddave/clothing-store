import { takeLatest, call, all, put } from "redux-saga/effects";
import { userActionTypes } from "../user/userActionTypes";
import { clearCart } from "./cartAction";

export function* onClearCart() {
  yield put(clearCart());
}

export function* clearCartSaga() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, onClearCart);
}

export function* cartSagas() {
  yield all([call(clearCartSaga)]);
}
