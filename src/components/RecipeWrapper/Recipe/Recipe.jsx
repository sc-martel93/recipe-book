import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Recipe = ({ recipe }) => {
  const { name, ingredients, directions, notes } = recipe;
  const ingredientArray = ingredients.split(", ");

  return (
    <article className="w-5/6 max-w-3xl mx-auto px-10 py-10 space-y-5 mt-10  break-words bg-neutral-300 rounded-lg shadow-lg shadow-emerald-800">
      <section className="flex justify-between border-b-4 border-zinc-900">
        <button>
          <FontAwesomeIcon
            className="text-xl hover:text-indigo-600"
            icon={faEdit}
          />
        </button>
        <h2 className="text-3xl font-bold text-center py-5">{name}</h2>
        <button>
          <FontAwesomeIcon
            className="text-xl hover:text-red-700"
            icon={faTrash}
          />
        </button>
      </section>

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
