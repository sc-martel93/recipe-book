import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { setIndex } from "../../../state/actions/recipeIndex";

const SearchBar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const [searchValue, setSearchValue] = useState("");
  const [isFound, setIsFound] = useState(true);
  let targetIndex = -1;
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue === "") return;

    const target = searchValue.toLowerCase();

    recipes.map((recipe, index) => {
      let recipeName = recipe.name.toLowerCase();

      if (recipeName.includes(target)) {
        targetIndex = index;
        dispatch(setIndex(targetIndex));
        setIsFound(true);
        setIsOpen(false);
      }
    });

    if (targetIndex === -1)
      setIsFound(false);
           
    setSearchValue("");
  };

  // Reset search error when open and close menu
  useEffect(() => {
    setIsFound(true);
  }, [isOpen]);

  return (
    <>
      <form 
        onSubmit={(e) => handleSearch(e)} 
        className="max-w-6xl mx-auto flex justify-center mt-10"
      > 
        <input
          type="text"
          title="Search Bar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-44 outline-none hover:bg-yellow-200 focus:bg-yellow-200 rounded px-2 py-1.5 mr-1 text-black"
        />
        <button
          type="submit"
          title="Search"
          className="w-10 outline-none bg-slate-300 hover:bg-yellow-400 focus:bg-yellow-400 transition-colors rounded px-2 py-1.5 text-black"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      {!isFound && 
        <h1 className="text-center mt-5 text-red-500">Recipe not found!</h1>
      }
    </>
  )
}

export default SearchBar