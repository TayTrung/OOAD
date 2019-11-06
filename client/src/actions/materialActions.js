import {
  GET_MATERIALS,
  ADD_MATERIAL,
  DELETE_MATERIAL,
  MATERIALS_LOADING
} from "./types";
import axios from "axios";
import { log } from "util";

export const getMaterials = (show = 10, page = 1, query) => dispatch => {
  let newQuery = "";
  if (query === "") newQuery = "undefined";
  else newQuery = query;
  axios
    .get(`/api/material/${show}/${page}/${newQuery}`)

    .then(response => dispatch({ type: GET_MATERIALS, payload: response.data }))
    .catch(er => console.log(er.response));
};

export const deleteMaterial = id => dispatch => {
  axios.delete(`/api/material/${id}`).then(response => {
    dispatch({
      type: DELETE_MATERIAL,
      payload: response.data
    });
  });
};

export const addMaterial = newMaterial => dispatch => {
  axios
    .post("/api/material/", newMaterial)
    .then(response => {
      dispatch({
        type: ADD_MATERIAL,
        payload: newMaterial
      });
    })
    .catch(er => console.log(er.response));
};

export const setMaterialsLoading = () => {
  return {
    type: MATERIALS_LOADING
  };
};
