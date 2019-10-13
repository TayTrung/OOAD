import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORY,
  CATEGORIES_LOADING
} from "./types";
import axios from "axios";
import { log } from "util";

export const getCategories = (show = 5, page = 1, query) => dispatch => {
  // dispatch(setCategoriesLoading());
  let newQuery = "";
  if (query === "") newQuery = "undefined";
  else newQuery = query;
  axios
    .get(`/api/category/${show}/${page}/${newQuery}`)

    .then(response =>
      dispatch({ type: GET_CATEGORIES, payload: response.data })
    )
    .catch(er => console.log(er.response));
};

export const deleteCategory = id => dispatch => {
  axios.delete(`/api/category/${id}`).then(response => {
    dispatch({
      type: DELETE_CATEGORY,
      payload: response.data
    });
  });
};

export const addCategory = newCategory => dispatch => {
  axios.post("/api/category/", newCategory).then(response => {
    dispatch({
      type: ADD_CATEGORY,
      payload: newCategory
    });
  });
};

export const setCategoriesLoading = () => {
  return {
    type: CATEGORIES_LOADING
  };
};
