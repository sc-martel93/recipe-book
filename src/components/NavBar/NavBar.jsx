import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { setIndex } from "../../state/actions/recipeIndex";
import InputForm from "./InputForm/InputForm";

const NavBar = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  const [isCreating, setIsCreating] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  let targetIndex = -1;

  const handleSearch = (e) => {
    e.preventDefault();

    recipes.map((recipe, index) => {
      if (recipe.name.includes(searchValue)) {
        targetIndex = index;
        dispatch(setIndex(targetIndex));
      }
    });

    if (targetIndex === -1) alert("Not found!");
    setSearchValue("");
  };

  return (
    <div className="bg-emerald-900">
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row lg:flex-row justify-between md:justify-evenly lg:justify-evenly items-center h-36 md:h-16 lg:h-16">
        <h1 className="text-slate-200 text-4xl">Recipes</h1>

        <button
          onClick={() => setIsCreating(!isCreating)}
          className="bg-slate-300 hover:bg-cyan-600 w-[252px] md:w-fit lg:w-fit hover:outline transition-colors font-bold rounded px-5 py-1.5"
        >
          {isCreating ? "Close" : "Create"}
        </button>

        <form onSubmit={(e) => handleSearch(e)} className="">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="rounded px-2 py-1.5 mr-1"
          />
          <button
            type="submit"
            className="bg-slate-300 hover:bg-cyan-600 hover:outline transition-colors rounded px-2 py-1.5"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </nav>

      {isCreating ? <InputForm /> : null}
    </div>
  );
};

export default NavBar;
