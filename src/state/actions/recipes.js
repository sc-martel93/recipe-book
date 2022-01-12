export const createRecipe = (recipe) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE", payload: recipe });
  } catch (error) {
    console.error(error.message);
  }
};
