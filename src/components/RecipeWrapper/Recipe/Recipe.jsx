import React from "react";

const Recipe = ({ recipe }) => {
  const { name, ingredients, directions, notes } = recipe;
  const ingredientArray = ingredients.split(", ");

  return (
    <article className="w-screen flex flex-col items-center space-y-5 ">
      <h2 className="text-3xl font-bold">{name}</h2>

      <ol className="list-disc">
        <p className="font-bold mb-2">Ingredients</p>
        {ingredientArray.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ol>
      <p>Directions</p>
      <p>{directions}</p>
      <p>{notes}</p>
    </article>
  );
};

export default Recipe;
