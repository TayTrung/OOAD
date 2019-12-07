import {
  GET_SEARCH_MEMBERS,
  GET_MEMBERS,
  ADD_MEMBER,
  DELETE_MEMBER,
  GET_MEMBER,
  MEMBERS_LOADING
} from "./types";
import axios from "axios";
import { log } from "util";
const mongoose = require("mongoose");

export const getMembers = (show = 5, page = 1, query) => dispatch => {
  let newQuery = "";
  if (query === "") newQuery = "undefined";
  else newQuery = query;
  axios
    .get(`/api/member/${show}/${page}/${newQuery}`)

    .then(response =>
      //console.log(response.data)
      dispatch({ type: GET_MEMBERS, payload: response.data })
    )
    .catch(er => console.log(er.response));
};

export const getSearchMembers = (query) => dispatch => {
  let newQuery = "";
  if (query === "") newQuery = "undefined";
  else newQuery = query;
  axios
    .get(`/api/member/search/${newQuery}`)

    .then(response =>
      dispatch({ type: GET_SEARCH_MEMBERS, payload: response.data })
    )
    .catch(er => console.log(er.response));
};

export const deleteMember = id => dispatch => {
  axios.delete(`/api/member/${id}`).then(response => {
    dispatch({
      type: DELETE_MEMBER,
      payload: response.data
    });
  });
};

export const addMember = newMember => dispatch => {
  console.log(newMember._id);
  axios.post("/api/member/", newMember).then(response => {

    if (newMember._id instanceof mongoose.Types.ObjectId) {
      newMember._id = newMember._id.toString();
    }

    dispatch({
      type: ADD_MEMBER,
      payload: newMember,
      response: response.status,
    });
  });
};

export const setMembersLoading = () => {
  return {
    type: MEMBERS_LOADING
  };
};
