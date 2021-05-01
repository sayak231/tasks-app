import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as types from "../actions/action-types";
import { fetchedData } from "../../services";

export function* watchGetTaskFromApi() {
  yield takeLatest(types.GET_TASKS, getTaskFromApi);
}

function* getTaskFromApi() {
  try {
    const data = yield call(fetchedData);
    const { results, status, message } = data;
    if (status === "error") {
      yield put({
        type: types.GET_TASKS_FAIL,
        status: status,
        message: message,
      });
    }
    yield put({
      type: types.GET_TASKS_SUCCESS,
      results: results,
      status: status,
    });
  } catch (error) {
    const { message, status } = error.response ? error.response : [[], "511"];
    yield put({
      type: types.GET_TASKS_FAIL,
      message: message,
      status: status,
    });
  }
}
