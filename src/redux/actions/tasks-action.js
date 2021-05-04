import * as types from "./action-types";

export const getUserId = () => ({
  type: types.GET_USER_ID,
});

export const getTasks = () => ({
  type: types.GET_TASKS,
});

export const postTasks = (data) => ({
  type: types.POST_TASKS,
  data: data,
});

export const putTasks = (id, data) => ({
  type: types.PUT_TASKS,
  data: data,
  id: id,
});

export const deleteTasks = (id) => ({
  type: types.DELETE_TASKS,
  id: id,
});
