import React from "react";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../../state/actions/recipes";
import { setIndex } from "../../../state/actions/recipeIndex";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Recipe = ({ recipe }) => {
  const dispatch = useDispatch();

  const { name, ingredients, directions, notes } = recipe;
  const ingredientArray = ingredients.split(", ");

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (!confirmDelete) return;
    dispatch(deleteRecipe(recipe.id));
    dispatch(setIndex(0));
  };

  const checkForNotes = (notes) => {
    if (notes == null || notes == "") return false;
    return true;
  };

  return (
    <article className="w-5/6 max-w-3xl mx-auto px-10 py-10 space-y-10 mt-10  break-words bg-yellow-100 rounded-lg shadow-lg shadow-slate-600">
      <section className="flex justify-between border-b-4 border-zinc-900">
        <button
          title="Edit"
          className="outline-none text-xl hover:text-sky-500 hover:text-2xl focus:text-sky-500 focus:text-2xl ease-in duration-100"
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <h2 className="text-3xl font-bold text-center py-5">{name}</h2>
        <button
          title="Delete"
          onClick={() => handleDelete()}
          className="outline-none text-xl hover:text-red-700 hover:text-2xl focus:text-red-700 focus:text-2xl ease-in duration-100"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </section>

      <section>
        <h3 className="font-bold text-xl mb-2">Ingredients</h3>
        <ol className="list-disc">
          {ingredientArray.map((ingredient, index) => {
            return (
              <li key={index} className="ml-8 md:ml-7 lg:ml-10">
                {ingredient}
              </li>
            );
          })}
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-xl mb-2">Directions</h3>
        <p className="ml-5 md:ml-7 lg:ml-10">{directions}</p>
      </section>

      {checkForNotes(notes) && (
        <section>
          <h3 className="font-bold text-xl mb-2">Notes</h3>
          <p className="ml-5 md:ml-7 lg:ml-10">{notes}</p>
        </section>
      )}
    </article>
  );
};

export default Recipe;
