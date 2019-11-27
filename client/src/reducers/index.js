import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import memberReducer from "./memberReducer";
import productReducer from "./productReducer";
import invoiceReducer from "./invoiceReducer";
import notificationReducer from "./notificationReducer";

export default combineReducers({
  category: categoryReducer,
  member: memberReducer,
  product: productReducer,
  invoice: invoiceReducer,
  showNoti: notificationReducer,
});
