export const recipeReducer = (recipes = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...recipes, action.payload];

    default:
      return recipes;
  }
};
