import {
  GET_ROLES,
  ADD_ROLE,
  DELETE_ROLE,
  ROLES_LOADING,
  UPDATE_ROLE
} from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
const mongoose = require("mongoose");

export const getRoles = (show = 5, page = 1, query) => (dispatch, getState) => {
  // dispatch(setCategoriesLoading());
  let newQuery = "";
  if (query === "") newQuery = "undefined";
  else newQuery = query;
  axios
    .get(`/api/role/${show}/${page}/${newQuery}`, tokenConfig(getState))

    .then(response => dispatch({ type: GET_ROLES, payload: response.data }))
    .catch(er => console.log(er.response));
};

export const deleteRole = id => dispatch => {
  axios.delete(`/api/role/${id}`).then(response => {
    dispatch({
      type: DELETE_ROLE,
      payload: response.data
    });
  });
};

export const addRole = newRole => (dispatch, getState) => {
  axios
    .post("/api/role/", newRole, tokenConfig(getState))
    .then(response => {
      if (newRole._id instanceof mongoose.Types.ObjectId) {
        newRole._id = newRole._id.toString();
      }
      dispatch({
        type: ADD_ROLE,
        payload: newRole
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const setRolesLoading = () => {
  return {
    type: ROLES_LOADING
  };
};

export const updateRole = newRole => (dispatch, getState) => {
  axios
    .put(`/api/role/${newRole._id}`, newRole, tokenConfig(getState))

    .then(response => {
      dispatch({
        type: UPDATE_ROLE,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error.response);
    });
};
