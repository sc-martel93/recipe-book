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
    const target = searchValue.toLowerCase();

    recipes.map((recipe, index) => {
      let recipeName = recipe.name.toLowerCase();

      if (recipeName.includes(target)) {
        targetIndex = index;
        dispatch(setIndex(targetIndex));
      }
    });

    if (targetIndex === -1) alert("Not found!");
    setSearchValue("");
  };

  // const navBar = document.getElementById("navBar");
  // let navbarMoved = false;

  // const handleScroll = () => {
  //   navbarMoved = true;
  // };

  return (
    <div
      id="navBar"
      className="bg-emerald-900 sticky top-0 shadow-lg shadow-emerald-800 opacity-90"
    >
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row lg:flex-row justify-evenly items-center h-44 md:h-16 lg:h-16">
        <h1 className="text-orange-400 text-4xl">Recipes</h1>

        <button
          onClick={() => setIsCreating(!isCreating)}
          title="Create Recipe"
          className="outline-none bg-slate-300 hover:bg-orange-400 focus:bg-orange-400 w-56 md:w-fit lg:w-fit transition-colors font-bold rounded px-5 py-1.5"
        >
          {isCreating ? "Close" : "Create"}
        </button>

        <form onSubmit={(e) => handleSearch(e)} className="">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-44 outline-none hover:bg-orange-200 focus:bg-orange-200 rounded px-2 py-1.5 mr-1"
          />
          <button
            type="submit"
            title="Search"
            className="w-10 outline-none bg-slate-300 hover:bg-orange-400 focus:bg-orange-400 transition-colors rounded px-2 py-1.5"
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
