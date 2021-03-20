import { all, call } from "redux-saga/effects";
import { fetchCollectionsStartSaga } from "./shop/shopSaga";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStartSaga)]);
}
