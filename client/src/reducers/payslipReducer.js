import {
  GET_PAYSLIPS,
  ADD_PAYSLIP,
  DELETE_PAYSLIP,
  GET_PAYSLIP,
  PAYSLIPS_LOADING
} from "../actions/types";

const initialState = {
  payslips: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PAYSLIPS:
      return {
        ...state,
        payslips: action.payload,
        loading: false
      };
    case DELETE_PAYSLIP:
      return {
        ...state,
        payslips: state.payslips.filter(
          payslip => payslip._id !== action.payload._id
        )
      };
    case ADD_PAYSLIP:
      return {
        ...state,
        payslips: [action.payload, ...state.payslips]
      };
    case PAYSLIPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
