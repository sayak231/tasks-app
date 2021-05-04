import { combineReducers } from "redux";
import * as types from "../actions/action-types";

const getUser = (state = { results: [] }, action) => {
  switch (action.type) {
    case types.GET_USER_ID_FAIL:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.GET_USER_ID_SUCCESS:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.GET_USER_ID:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: true,
      };
    default:
      return { ...state };
  }
};

const getTasksList = (state = { results: [] }, action) => {
  switch (action.type) {
    case types.GET_TASKS_FAIL:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.GET_TASKS_SUCCESS:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.GET_TASKS:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: true,
      };
    default:
      return { ...state };
  }
};

const postTasksList = (state = { results: [] }, action) => {
  switch (action.type) {
    case types.POST_TASKS_FAIL:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.POST_TASKS_SUCCESS:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.POST_TASKS:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: true,
      };
    default:
      return { ...state };
  }
};

const putTasksList = (state = { results: [] }, action) => {
  switch (action.type) {
    case types.PUT_TASKS_FAIL:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.PUT_TASKS_SUCCESS:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.PUT_TASKS:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: true,
      };
    default:
      return { ...state };
  }
};

const deleteTasksList = (state = { results: [] }, action) => {
  switch (action.type) {
    case types.DELETE_TASKS_FAIL:
      return {
        ...state,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.DELETE_TASKS_SUCCESS:
      return {
        ...state,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.DELETE_TASKS:
      return {
        ...state,
        message: action.message,
        status: action.status,
        loading: true,
      };
    default:
      return { ...state };
  }
};

export default combineReducers({
  getUser,
  getTasksList,
  postTasksList,
  putTasksList,
  deleteTasksList,
});
