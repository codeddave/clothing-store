import { takeEvery } from "redux-saga/effects";
import { shopActionTypes } from "./shopActionTypes";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");
}

export function* fetchCollectionsStartSaga() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
