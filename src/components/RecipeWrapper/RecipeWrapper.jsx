import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { next, previous, setIndex } from "../../state/actions/recipeIndex";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Recipe from "./Recipe/Recipe";

const RecipeWrapper = () => {
  const dispatch = useDispatch();
  const recipeIndex = useSelector((state) => state.recipeIndex);
  const recipes = useSelector((state) => state.recipes);
  const recipeCount = recipes.length;

  const handlePrevious = () => {
    if (recipeCount == 0) return;
    if (recipeIndex <= 0) return dispatch(setIndex(recipeCount - 1));
    dispatch(previous());
  };

  const handleNext = () => {
    if (recipeIndex >= recipeCount - 1) return dispatch(setIndex(0));
    dispatch(next());
  };

  return (
    <>
      <div className="flex justify-around items-center font-bold max-w-2/3 mt-5">
        <button
          onClick={() => handlePrevious()}
          className="bg-slate-300 hover:bg-cyan-600 hover:outline transition-colors rounded px-5 py-1.5"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h3>
          Page {recipeCount == 0 ? 0 : recipeIndex + 1} out of {recipeCount}
        </h3>
        <button
          onClick={() => handleNext()}
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
