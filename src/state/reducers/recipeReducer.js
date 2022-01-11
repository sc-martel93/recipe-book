export const recipeReducer = (recipes = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [action.payload, ...recipes];
    default:
      return recipes;
  }
};
