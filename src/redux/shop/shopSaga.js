import { takeEvery, call, put } from "redux-saga/effects";
import { shopActionTypes } from "./shopActionTypes";
import {
  convertCollectionsSnapsotToMap,
  firestore,
} from "../../firebase/firebase.util";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shopActions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapsotToMap, snapShot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStartSaga() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
