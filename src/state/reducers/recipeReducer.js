export const recipeReducer = (recipes = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...recipes, action.payload];

    case "SEARCH":
      if (recipes.length == 0) return [];
      let result = recipes.filter((recipe) => {
        return recipe.name === action.payload;
      });
      result = result[0];
      if (result === undefined) return [...recipes];

      let newArr = recipes.filter((recipe) => {
        return recipe.id !== result.id;
      });
      newArr.unshift(result);

      return newArr;

    default:
      return recipes;
  }
};
