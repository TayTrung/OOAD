import {
    GET_USERS,
    ADD_USER,
    DELETE_USER,
    GET_USER,
    USERS_LOADING
  } from "./types";
  import axios from "axios";
  import { log } from "util";
  
  export const getUsers = (show = 5, page = 1, query) => dispatch => {
    // dispatch(setUsersLoading());
    let newQuery = "";
    if (query === "") newQuery = "undefined";
    else newQuery = query;
    axios
      .get(`/api/user/${show}/${page}/${newQuery}`)
  
      .then(response =>
        dispatch({ type: GET_USERS, payload: response.data })
      )
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
    axios.post("/api/user/", newUser).then(response => {
      dispatch({
        type: ADD_USER, 
        payload: newUser
      });
    });
  };
  
  export const setUsersLoading = () => {
    return {
      type: USERS_LOADING
    };
  };
  