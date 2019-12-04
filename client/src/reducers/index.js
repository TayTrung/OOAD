import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import supplierReducer from "./supplierReducer";
import errorReducer from "./errorReducer";

import authReducer from "./authReducer";
import historyReducer from "./historyReducer";
import roleReducer from "./roleReducer";

export default combineReducers({
  category: categoryReducer,
  error: errorReducer,
  auth: authReducer,
  history: historyReducer,
  supplier: supplierReducer,
  role: roleReducer

});
