import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import memberReducer from "./memberReducer";
import productReducer from "./productReducer";
import invoiceReducer from "./invoiceReducer";
import payslipReducer from "./payslipReducer";
import notificationReducer from "./notificationReducer";

export default combineReducers({
  category: categoryReducer,
  member: memberReducer,
  product: productReducer,
  invoice: invoiceReducer,
  payslip: payslipReducer,
  showNoti: notificationReducer,
});
