import { combineReducers } from "redux";
import { recipeIndexReducer } from "./recipeIndexReducer";
import { recipeReducer } from "./recipeReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  recipes: recipeReducer,
  recipeIndex: recipeIndexReducer,
  user: userReducer,
});
