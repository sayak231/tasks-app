import * as types from "./action-types";

export const getTasks = () => ({
  type: types.GET_TASKS,
});

export const postTasks = (data) => ({
  type: types.POST_TASKS,
  data: data,
});

export const putTasks = (data) => ({
  type: types.PUT_TASKS,
  data: data,
});

export const deleteTasks = (data) => ({
  type: types.DELETE_TASKS,
  data: data,
});
