import {
  GET_INVOICES,
  ADD_INVOICE,
  DELETE_INVOICE,
  GET_INVOICE,
  INVOICES_LOADING
} from "./types";
import axios from "axios";
import { log } from "util";

export const getInvoices = (show = 5, page = 1, query) => dispatch => {
  let newQuery = "";
  if (query === "") newQuery = "undefined";
  else newQuery = query;
  axios
    .get(`/api/invoice/${show}/${page}/${newQuery}`)

    .then(response =>
      dispatch({ type: GET_INVOICES, payload: response.data })
    )
    .catch(er => console.log(er.response));
};

export const deleteInvoice = id => dispatch => {
  axios.delete(`/api/invoice/${id}`).then(response => {
    dispatch({
      type: DELETE_INVOICE,
      payload: response.data
    });
  });
};

export const addInvoice = newInvoice => dispatch => {
  axios.post("/api/invoice/", newInvoice).then(response => {
    dispatch({
      type: ADD_INVOICE,
      payload: newInvoice,
      response: response.status,
    });
  });
};

export const setInvoicesLoading = () => {
  return {
    type: INVOICES_LOADING
  };
};
