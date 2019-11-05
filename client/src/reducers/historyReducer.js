import { GET_HISTORY } from "../actions/types";

const initialState = {
  history: { location: { pathname: "/" } }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY:
      return {
        ...state,
        history: action.payload
      };

    default:
      return state;
  }
}
