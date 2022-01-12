import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Recipe from "./Recipe/Recipe";

const RecipeWrapper = () => {
  let [recipeIndex, setRecipeIndex] = useState(0);
  const recipes = useSelector((state) => state.recipes);
  const recipeCount = recipes.length;

  const previous = () => {
    if (recipeCount == 0) return;
    if (recipeIndex <= 0) return setRecipeIndex(recipeCount - 1);
    setRecipeIndex(recipeIndex - 1);
  };

  const next = () => {
    if (recipeIndex >= recipeCount - 1) return setRecipeIndex(0);
    setRecipeIndex(recipeIndex + 1);
  };

  return (
    <>
      <div className="flex justify-around items-center font-bold max-w-2/3 mt-5">
        <button
          onClick={() => previous()}
          className="bg-slate-300 hover:bg-cyan-600 hover:outline transition-colors rounded px-5 py-1.5"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h3>Page {recipeIndex + 1}</h3>
        <button
          onClick={() => next()}
          className="bg-slate-300 hover:bg-cyan-600 hover:outline transition-colors rounded px-5 py-1.5"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      {recipeCount === 0 ? (
        <h2 className="font-bold text-center text-3xl mt-20">No Recipes</h2>
      ) : (
        <Recipe recipe={recipes[recipeIndex]} />
      )}
    </>
  );
};

export default RecipeWrapper;
