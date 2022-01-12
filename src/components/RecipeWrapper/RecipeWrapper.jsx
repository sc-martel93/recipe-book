import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Recipe from "./Recipe/Recipe";

const RecipeWrapper = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <>
      <div className="flex justify-around max-w-2/3 mt-5">
        <button className="bg-slate-300 hover:bg-cyan-600 hover:outline transition-colors rounded px-5 py-1.5">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h3>{}</h3>
        <button className="bg-slate-300 hover:bg-cyan-600 hover:outline transition-colors rounded px-5 py-1.5">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  );
};

export default Recipe;
