import {
  GET_INVOICES,
  ADD_INVOICE,
  DELETE_INVOICE,
  GET_INVOICE,
  INVOICES_LOADING
} from "../actions/types";

const initialState = {
  invoices: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INVOICES:
      return {
        ...state,
        invoices: action.payload,
        loading: false
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
        invoices: [action.payload, ...state.invoices]
      };
    case INVOICES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
