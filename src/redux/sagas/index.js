import { fork, all } from "redux-saga/effects";
import * as TaskSaga from "../sagas/tasks-saga";

function* RootSaga() {
  yield all([
    fork(TaskSaga.watchGetUserApi),
    fork(TaskSaga.watchGetTaskFromApi),
    fork(TaskSaga.watchPostTaskToApi),
    fork(TaskSaga.watchPutTaskToApi),
    fork(TaskSaga.watchDeleteTaskFromApi),
  ]);
}

export default RootSaga;
