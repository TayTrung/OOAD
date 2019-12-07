import {
  GET_PAYSLIPS,
  ADD_PAYSLIP,
  DELETE_PAYSLIP,
  PAYSLIPS_LOADING
} from "./types";
import axios from "axios";
import { log } from "util";
const mongoose = require("mongoose");

export const getPaySlips = (show = 5, page = 1, query) => dispatch => {
  let newQuery = "";
  if (query === "") newQuery = "undefined";
  else newQuery = query;
  axios
    .get(`/api/payslip/${show}/${page}/${newQuery}`)

    .then(response =>
      dispatch({ type: GET_PAYSLIPS, payload: response.data })
    )
    .catch(er => console.log(er.response));
};

export const deletePaySlip = id => dispatch => {
  axios.delete(`/api/payslip/${id}`).then(response => {
    dispatch({
      type: DELETE_PAYSLIP,
      payload: response.data
    });
  });
};

export const addPaySlip = newPaySlip => dispatch => {

  axios.post("/api/payslip/", newPaySlip).then(response => {

    if (newPaySlip._id instanceof mongoose.Types.ObjectId) {
      newPaySlip._id = newPaySlip._id.toString();
    }

    dispatch({
      type: ADD_PAYSLIP,
      payload: newPaySlip,
      response: response.status
    });
  });
};

export const setPaySlipsLoading = () => {
  return {
    type: PAYSLIPS_LOADING
  };
};
