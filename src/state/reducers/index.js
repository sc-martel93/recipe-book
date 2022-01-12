import { combineReducers } from "redux";
import { recipeIndexReducer } from "./recipeIndexReducer";
import { recipeReducer } from "./recipeReducer";

export default combineReducers({
  recipes: recipeReducer,
  recipeIndex: recipeIndexReducer,
});
