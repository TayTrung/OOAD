import {
    GET_USERS,
    ADD_USER,
    DELETE_USER,
    GET_USER,
    USERS_LOADING
  } from "../actions/types";
  
  const initialState = {
    users: [],
  
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_USERS:
        return {
          ...state,
          users: action.payload,
          loading: false
        };
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter(
            supplier => supplier._id !== action.payload._id
          )
        };
      case ADD_USER:
        return {
          ...state,
          users: [action.payload, ...state.users]
        };
      case USERS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
  