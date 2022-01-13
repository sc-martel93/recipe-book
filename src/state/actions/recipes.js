import * as api from "../api";

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRecipes();
    dispatch({ type: "FETCH_ALL", payload: data.recipes });
  } catch (error) {
    console.error(error.message);
  }
};

export const createRecipe = (recipe) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE", payload: recipe });
  } catch (error) {
    console.error(error.message);
  }
};
