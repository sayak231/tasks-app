import { fork, all } from "redux-saga/effects";
import * as TaskSaga from "../sagas/tasks-saga";

function* RootSaga() {
  yield all([TaskSaga.watchGetTaskFromApi()]);
}

export default RootSaga;
