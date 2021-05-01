import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import RootReducers from "./reducers/index";
import RootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);

export default store;
