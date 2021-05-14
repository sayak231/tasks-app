import axios from "axios";

const headers = {
  Authorization:
    "Bearer " +
    "token",
  Accept: "application/json",
  "Content-Type": "application/json",
};

const url =
  "url";

export const getUserId = async () => {
  try {
    const data = await axios.get("url", {
      headers,
    });
    return data.data;
  } catch (err) {
    throw err;
  }
};

export const getData = async () => {
  try {
    const data = await axios.get(url, {
      headers,
    });
    return data.data;
  } catch (err) {
    throw err;
  }
};

export const postData = async (dataObj) => {
  try {
    const data = await axios.post(url, dataObj, {
      headers,
    });
    return data.data;
  } catch (err) {
    throw err;
  }
};

export const putData = async (taskId, dataObj) => {
  try {
    const data = await axios.put(`${url}/${taskId}`, dataObj, {
      headers,
    });
    return data.data;
  } catch (err) {
    throw err;
  }
};

export const deleteData = async (taskId) => {
  try {
    const data = await axios.delete(`${url}/${taskId}`, {
      headers,
    });
    return data.data;
  } catch (err) {
    throw err;
  }
};
