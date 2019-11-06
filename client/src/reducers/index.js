import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import materialReducer from "./materialReducer";

export default combineReducers({
  category: categoryReducer,
  material: materialReducer
});
