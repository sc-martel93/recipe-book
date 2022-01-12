import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { searchRecipe } from "../../state/actions/recipes";
import InputForm from "./InputForm/InputForm";

const NavBar = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchRecipe(searchValue));
    setSearchValue("");
  };

  return (
    <div className="bg-emerald-900 ">
      <nav className="h-16 container mx-auto max-w-2/3 flex justify-around items-center">
        <h1 className="text-slate-200 text-4xl">Recipes</h1>

        <button
          onClick={() => setIsCreating(!isCreating)}
          className="bg-slate-300 hover:bg-cyan-600 hover:outline  transition-colors font-bold rounded px-5 py-1.5"
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
