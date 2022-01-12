import React from "react";

const Recipe = ({ recipe }) => {
  const { name, ingredients, directions, notes } = recipe;
  return (
    <div>
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <p>{directions}</p>
      <p>{notes}</p>
    </div>
  );
};

export default Recipe;
