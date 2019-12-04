import {
  GET_ROLES,
  ADD_ROLE,
  DELETE_ROLE,
  ROLES_LOADING,
  UPDATE_ROLE
} from "../actions/types";

const initialState = {
  roles: [],

  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROLES:
      return {
        ...state,
        roles: action.payload,
        loading: false
      };
    case DELETE_ROLE:
      return {
        ...state,
        roles: state.roles.filter(roles => roles._id !== action.payload._id)
      };
    case ADD_ROLE:
      return {
        ...state,
        roles: [action.payload, ...state.roles]
      };
    case ROLES_LOADING:
      return {
        ...state,
        loading: true
      };
    case UPDATE_ROLE:
      return {
        ...state
        // categories: [...state.slice(0, i), { ...state[i], likes }]
      };
    default:
      return state;
  }
}
