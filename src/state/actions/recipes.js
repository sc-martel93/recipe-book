export const createRecipe = (recipe) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE", payload: recipe });
  } catch (error) {
    console.error(error.message);
  }
};

export const searchRecipe = (recipeName) => (dispatch) => {
  try {
    dispatch({ type: "SEARCH", payload: recipeName });
  } catch (error) {
    console.error(error.message);
  }
};
