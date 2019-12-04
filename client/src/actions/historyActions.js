import { GET_HISTORY } from "./types";

export const loadHistory = history => dispatch => {
  dispatch({
    type: GET_HISTORY,
    payload: history
  });
};

export const pushHistory = path => (dispatch, getState) => {
  const currentHistory = getState().history.history;

  currentHistory.push(path);

  dispatch({
    type: GET_HISTORY,
    payload: currentHistory
  });
};
