export const recipeIndexReducer = (index = 0, action) => {
  switch (action.type) {
    case "NEXT":
      return index + 1;

    case "PREVIOUS":
      return index - 1;

    case "SET_INDEX":
      return action.payload;

    default:
      return index;
  }
};
