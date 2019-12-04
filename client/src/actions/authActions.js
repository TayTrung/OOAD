import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  CLEAR_ERRORS
  // REGISTER_SUCCESS,
  // REGISTER_FAIL,
  // GET_ERRORS
} from "./types";
import { returnErrors } from "./errorActions";
import axios from "axios";

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(er => {
      dispatch(returnErrors(er.response.data, er.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const login = user => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  //   const body = JSON.stringify({ username, password });

  axios
    .post("/api/auth", user, config)
    .then(response => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      });
      dispatch({
        type: CLEAR_ERRORS
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      return {
        type: LOGIN_FAIL
      };
    });
};

export const tokenConfig = getState => {
  //Get token from local storage
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //Header
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
