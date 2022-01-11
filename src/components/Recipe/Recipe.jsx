import React from "react";

const Recipe = ({ recipe }) => {
  return (
    <div className="">
      <h2>{recipe.name}</h2>
      <p>{recipe.ingredients}</p>
      <p>{recipe.directions}</p>
      <p>{recipe.notes}</p>
    </div>
  );
};

export default Recipe;
