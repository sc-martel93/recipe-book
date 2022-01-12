import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Recipe from "./Recipe/Recipe";

const RecipeWrapper = () => {
  let [recipeIndex, setRecipeIndex] = useState(0);
  const recipes = useSelector((state) => state.recipes);

  const handlePrevious = () => {
    setRecipeIndex(recipeIndex - 1);
  };

  const handleNext = () => {
    setRecipeIndex(recipeIndex + 1);
  };

  return (
    <div className="flex justify-around items-center font-bold max-w-2/3 mt-5">
      <button
        onClick={() => handlePrevious()}
        className="bg-slate-300 hover:bg-cyan-600 hover:outline transition-colors rounded px-5 py-1.5"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h3>{recipeIndex}</h3>
      <button
        onClick={() => handleNext()}
        className="bg-slate-300 hover:bg-cyan-600 hover:outline transition-colors rounded px-5 py-1.5"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default RecipeWrapper;
