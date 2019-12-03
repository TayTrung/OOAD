import {
  GET_PAYSLIPS,
  ADD_PAYSLIP,
  DELETE_PAYSLIP,
  GET_PAYSLIP,
  PAYSLIPS_LOADING
} from "../actions/types";

const initialState = {
  payslips: [],
  isLoaded: false,
  response: null,
  type: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PAYSLIPS:
      return {
        ...state,
        payslips: action.payload,
        isLoaded: true,
        type: action.type,
      };
    case DELETE_PAYSLIP:
      return {
        ...state,
        payslips: state.payslips.filter(
          payslip => payslip._id !== action.payload._id
        ),
        type: action.type
      };
    case ADD_PAYSLIP:
      return {
        ...state,
        payslips: [action.payload, ...state.payslips],
        response: action.response,
        type: action.type,
      };
    case PAYSLIPS_LOADING:
      return {
        ...state,
        isLoaded: true,
      };
    default:
      return state;
  }
}
