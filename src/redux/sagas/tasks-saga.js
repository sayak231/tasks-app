import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/action-types";
import { getData, postData, putData, deleteData } from "../services";

export function* watchGetTaskFromApi() {
  yield takeLatest(types.GET_TASKS, getTaskFromApi);
}

function* getTaskFromApi() {
  try {
    const data = yield call(getData);
    const { results, status, message } = data;
    if (status === "error") {
      yield put({
        type: types.GET_TASKS_FAIL,
        results: results,
        status: status,
        message: message,
      });
    }
    yield put({
      type: types.GET_TASKS_SUCCESS,
      results: results,
      status: status,
      message: message,
    });
  } catch (error) {
    throw error;
  }
}

export function* watchPostTaskToApi() {
  yield takeLatest(types.POST_TASKS, callPostTaskToApi);
}

export function* callPostTaskToApi(action) {
  yield call(postTaskToApi, action.data);
}

function* postTaskToApi(dataObj) {
  try {
    const data = yield call(postData, dataObj);
    const { results, status, message } = data;
    if (status === "error") {
      yield put({
        type: types.POST_TASKS_FAIL,
        results: results,
        status: status,
        message: message,
      });
    }
    yield put({
      type: types.POST_TASKS_SUCCESS,
      results: results,
      status: status,
      message: message,
    });
  } catch (error) {
    throw error;
  }
}

export function* watchPutTaskToApi() {
  yield takeLatest(types.PUT_TASKS, callPutTaskToApi);
}

export function* callPutTaskToApi(action) {
  yield call(putTaskToApi, action.id, action.data);
}

function* putTaskToApi(taskId, dataObj) {
  try {
    const data = yield call(putData, taskId, dataObj);
    const { results, status, message } = data;
    if (status === "error") {
      yield put({
        type: types.PUT_TASKS_FAIL,
        results: results,
        status: status,
        message: message,
      });
    }
    yield put({
      type: types.PUT_TASKS_SUCCESS,
      results: results,
      status: status,
      message: message,
    });
  } catch (error) {
    throw error;
  }
}

export function* watchDeleteTaskFromApi() {
  yield takeLatest(types.DELETE_TASKS, callDeleteTaskFromApi);
}

export function* callDeleteTaskFromApi(action) {
  yield call(deleteTaskFromApi, action.id);
}

function* deleteTaskFromApi(taskId) {
  try {
    const data = yield call(deleteData, taskId);
    const { status, message } = data;
    if (status === "error") {
      yield put({
        type: types.DELETE_TASKS_FAIL,
        status: status,
        message: message,
      });
    }
    yield put({
      type: types.DELETE_TASKS_SUCCESS,
      status: status,
      message: message,
    });
  } catch (error) {
    throw error;
  }
}
