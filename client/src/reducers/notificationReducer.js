import {
  SHOW_NOTI
} from "../actions/types";

const initialState = {
  type: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTI:
      return {
        ...state,
        type: action.payload,
      };

    default:
      return state;
  }
}
