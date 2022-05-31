import * as api from "../api";

export const getAllRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRecipes();
    dispatch({ type: "FETCH_ALL", payload: data.recipes });
  } catch (error) {
    console.error(error.message);
  }
};

export const getMyRecipes = (username) => async (dispatch) => {
  try {
    const { data } = await api.fetchMyRecipes(username);
    dispatch({ type: "FETCH_ALL", payload: data.recipes });
  } catch (error) {
    console.error(error.message);
  }
};

export const createRecipe = (recipe) => async (dispatch) => {
  try {
    await api.createRecipe(recipe);
    dispatch({ type: "CREATE", payload: recipe });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteRecipe = (id) => async (dispatch) => {
  try {
    await api.deleteRecipe(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.error(error.message);
  }
};
