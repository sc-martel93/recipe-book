import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faDoorClosed, faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";

import { setIndex } from "../../state/actions/recipeIndex";
import InputForm from "./InputForm/InputForm";
import { faCircleRight, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

const HomeNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipes = useSelector((state) => state.recipes);
  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  
  const [isCreating, setIsCreating] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  let targetIndex = -1;

  const handleCreateRecipe = () => {
    setIsCreating(!isCreating);
    setIsOpen(false);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue === "") return;

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

  return (
    <>
    <section
      id="navBar"
      className="bg-blue-900 shadow-lg shadow-slate-600 sticky top-0"
    >
      <nav className="max-w-7xl mx-auto flex justify-around items-center h-16">
        <h1 className="text-yellow-400 text-4xl">Recipes</h1>

        <Menu 
          right 
          noOverlay
          disableAutoFocus
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        >
          {loggedIn ?
            <button
              onClick={handleCreateRecipe}
              title="Create Recipe"
              className="hover:text-yellow-300 focus:text-yellow-300 hover:tracking-wider"
            >
              {isCreating ?(
                <>
                  <FontAwesomeIcon icon={faXmarkCircle} className={"mr-5"} />
                  Close Form
              </>
              )
              : (
                <>
                  <FontAwesomeIcon icon={faPlusCircle} className={"mr-5"} />
                  Create Recipe
                </>
              )}
            </button>
          :
            <button
              onClick={() => navigate("/")}
              title="Login"
              className="hover:text-yellow-300 focus:text-yellow-300 hover:tracking-wider"
            >
              <FontAwesomeIcon icon={faDoorClosed} />
              Login
            </button>
          }

          <button

            title="Logout"
            className="hover:text-yellow-300 focus:text-yellow-300 hover:tracking-wider"
          >
            <FontAwesomeIcon icon={faCircleRight} className={"mr-5"} />
            Logout 
          </button>

        </Menu>
      </nav>

      {isCreating && <InputForm setIsCreating={setIsCreating} />}
    </section>

    {/* <form 
      onSubmit={(e) => handleSearch(e)} 
      className="max-w-6xl flex justify-center mt-10"
    >
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-44 outline-none hover:bg-yellow-200 focus:bg-yellow-200 rounded px-2 py-1.5 mr-1"
          />
          <button
            type="submit"
            title="Search"
            className="w-10 outline-none bg-slate-300 hover:bg-yellow-400 focus:bg-yellow-400 transition-colors rounded px-2 py-1.5"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form> */}
    </>
  );
};

export default HomeNav;
