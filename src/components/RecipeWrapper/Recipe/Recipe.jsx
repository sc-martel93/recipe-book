import React from "react";

const Recipe = ({ recipe }) => {
  const { name, ingredients, directions, notes } = recipe;
  const ingredientArray = ingredients.split(", ");

  return (
    <article className="max-w-2xl mx-auto px-10 py-10 space-y-5 mt-10  break-words bg-neutral-300 rounded-lg shadow-lg shadow-emerald-800">
      <h2 className="text-3xl font-bold text-center">{name}</h2>

      <section>
        <h3 className="font-bold mb-2">Ingredients</h3>
        <ol className="list-disc">
          {ingredientArray.map((ingredient, index) => {
            return (
              <li key={index} className="ml-10">
                {ingredient}
              </li>
            );
          })}
        </ol>
      </section>

      <section>
        <h3 className="font-bold mb-2">Directions</h3>
        <p className="ml-10">{directions}</p>
      </section>

      <section>
        <h3 className="font-bold mb-2">Notes</h3>
        <p className="ml-10">{notes}</p>
      </section>
    </article>
  );
};

export default Recipe;
