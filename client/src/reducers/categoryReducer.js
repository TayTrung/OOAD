import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY
} from "../actions/types";

const initialState = {
  categories: [],

  isLoaded: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        isLoaded: true
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          category => category._id !== action.payload._id
        )
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [action.payload, ...state.categories]
      };
    case UPDATE_CATEGORY:
      return {
        ...state
        // categories: [...state.slice(0, i), { ...state[i], likes }]
      };

    default:
      return state;
  }
}
