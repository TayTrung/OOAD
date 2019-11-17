import {
    GET_SUPPLIERS,
    ADD_SUPPLIER,
    DELETE_SUPPLIER,
    GET_SUPPLIER,
    SUPPLIERS_LOADING
  } from "./types";
  import axios from "axios";
  import { log } from "util";
  
  export const getSuppliers = (show = 5, page = 1, query) => dispatch => {
    // dispatch(setSuppliersLoading());
    let newQuery = "";
    if (query === "") newQuery = "undefined";
    else newQuery = query;
    axios
      .get(`/api/supplier/${show}/${page}/${newQuery}`)
  
      .then(response =>
        dispatch({ type: GET_SUPPLIERS, payload: response.data })
      )
      .catch(er => console.log(er.response));
  };
  
  export const deleteSupplier = id => dispatch => {
    axios.delete(`/api/supplier/${id}`).then(response => {
      dispatch({
        type: DELETE_SUPPLIER,
        payload: response.data
      });
    });
  };
  
  export const addSupplier = newSupplier => dispatch => {
    axios.post("/api/supplier/", newSupplier).then(response => {
      dispatch({
        type: ADD_SUPPLIER, 
        payload: newSupplier
      });
    });
  };
  
  export const setSuppliersLoading = () => {
    return {
      type: SUPPLIERS_LOADING
    };
  };
  