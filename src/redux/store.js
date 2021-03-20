import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
//import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { fetchCollectionsStartSaga } from "./shop/shopSaga";
import rootSaga from "./rootSaga";

//const middlewares = [thunk];
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export { store, persistor };
//Leaving Redux-thunk code for reference
