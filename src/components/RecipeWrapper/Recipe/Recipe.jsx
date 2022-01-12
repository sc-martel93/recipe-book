import React from "react";

const Recipe = ({ name, ingredients, directions, notes }) => {
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
