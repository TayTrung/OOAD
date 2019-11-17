import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import supplierReducer from "./supplierReducer";

export default combineReducers({
  category: categoryReducer,
  supplier: supplierReducer,
});
