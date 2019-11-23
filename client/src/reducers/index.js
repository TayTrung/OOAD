import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import materialReducer from "./materialReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";

import authReducer from "./authReducer";
import historyReducer from "./historyReducer";

export default combineReducers({
  category: categoryReducer,
  material: materialReducer,
  user: userReducer,
  error: errorReducer,
  auth: authReducer,
  history: historyReducer
});
