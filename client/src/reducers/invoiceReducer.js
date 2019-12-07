import {
  GET_INVOICES,
  ADD_INVOICE,
  DELETE_INVOICE,
  INVOICES_LOADING
} from "../actions/types";

const initialState = {
  invoices: [],
  isLoaded: false,
  type: null,
  response: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INVOICES:
      return {
        ...state,
        invoices: action.payload,
        isLoaded: true,
        type: action.type,
      };
    case DELETE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.filter(
          inv => inv._id !== action.payload._id
        )
      };
    case ADD_INVOICE:
      return {
        ...state,
        invoices: [action.payload, ...state.invoices],
        type: action.type,
        response: action.response,
      };
    case INVOICES_LOADING:
      return {
        ...state,
        isLoaded: true
      };
    default:
      return state;
  }
}
