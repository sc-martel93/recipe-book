export const recipeReducer = (recipes = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...recipes, action.payload];

    case "DELETE":
      return recipes.filter((recipe) => recipe.id !== action.payload);

    default:
      return recipes;
  }
};
