import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  USERS_LOADING,
  CHECK_CUR_PASS_USER
} from "./types";
import axios from "axios";

export const getUsers = (show = 10, page = 1, query) => dispatch => {
  let newQuery = "";
  if (query === "") newQuery = "undefined";
  else newQuery = query;
  axios
    .get(`/api/user/${show}/${page}/${newQuery}`)

    .then(response => dispatch({ type: GET_USERS, payload: response.data }))
    .catch(er => console.log(er.response));
};

export const deleteUser = id => dispatch => {
  axios.delete(`/api/user/${id}`).then(response => {
    dispatch({
      type: DELETE_USER,
      payload: response.data
    });
  });
};

export const addUser = newUser => dispatch => {
  axios
    .post("/api/user/", newUser)
    .then(response => {
      dispatch({
        type: ADD_USER,
        payload: newUser
      });
    })
    .catch(er => console.log(er.response));
};

export const setUsersLoading = () => {
  return {
    type: USERS_LOADING
  };
};

export const checkCurPassUser = id => dispatch => {
  console.log("userActionCheckCurPass");
  axios.post(`/api/cp/${id}`).then(response => {
    // console.log("userActionCheckCurPass");
    dispatch({
      type: CHECK_CUR_PASS_USER,
      payload: response.data
    });
  });
};
