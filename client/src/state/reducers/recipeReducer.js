export const recipeReducer = (recipes = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...recipes, action.payload];
    
    case "UPDATE":
      return recipes.map(recipe => {
        if(recipe.id === action.payload.id)
          return action.payload;
        else
          return recipe;
      })

    case "DELETE":
      return recipes.filter((recipe) => recipe.id !== action.payload);

    default:
      return recipes;
  }
};
