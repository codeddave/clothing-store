import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cartSagas";
import { fetchCollectionsStartSaga } from "./shop/shopSaga";
import { userSagas } from "./user/userSagas";
export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStartSaga),
    call(userSagas),
    call(cartSagas),
  ]);
}
