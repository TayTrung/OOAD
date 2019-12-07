import {
    GET_SUPPLIERS,
    ADD_SUPPLIER,
    DELETE_SUPPLIER,
    GET_SUPPLIER,
    SUPPLIERS_LOADING
  } from "../actions/types";
  
  const initialState = {
    suppliers: [],
  
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_SUPPLIERS:
        return {
          ...state,
          suppliers: action.payload,
          loading: false
        };
      case DELETE_SUPPLIER:
        return {
          ...state,
          suppliers: state.suppliers.filter(
            supplier => supplier._id !== action.payload._id
          )
        };
      case ADD_SUPPLIER:
        return {
          ...state,
          suppliers: [action.payload, ...state.suppliers]
        };
      case SUPPLIERS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
  