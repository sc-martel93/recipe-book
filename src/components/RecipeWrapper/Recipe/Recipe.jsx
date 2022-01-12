import React from "react";

const Recipe = ({ recipe }) => {
  const { name, ingredients, directions, notes } = recipe;
  const ingredientArray = ingredients.split(", ");

  return (
    <article className="w-screen flex flex-col items-center space-y-5 ">
      <h2 className="text-3xl font-bold">{name}</h2>

      <section>
        <h3 className="font-bold mb-2">Ingredients</h3>
        <ol className="list-disc">
          {ingredientArray.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ol>
      </section>

      <section>
        <h3 className="font-bold mb-2">Directions</h3>
        <p>{directions}</p>
      </section>

      <section>
        <h3 className="font-bold mb-2">Notes</h3>
        <p>{notes}</p>
      </section>
    </article>
  );
};

export default Recipe;
