import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-dropdown';
import { next, previous, setIndex } from "../../state/actions/recipeIndex";
import { getAllRecipes, getMyRecipes, getMyLikedRecipes, clearRecipes } from "../../state/actions/recipes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Recipe from "./Recipe/Recipe";

const RecipeWrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipeIndex = useSelector((state) => state.recipeIndex);
  const recipes = useSelector((state) => state.recipes);
  const recipeCount = recipes.length;

  const user = useSelector((state) => state.user);
  const uid = user?.uid;
  const username = user?.username;

  const options = [
    {value: 1, label: "All Recipes"},
    {value: 2, label: "My Recipes"},
    {value: 3, label: "Liked Recipes"}
  ];
  const defaultOption = options[0];
  const [currentOpt, setCurrentOpt] = useState(defaultOption);
  const [errMsg, setErrMsg] = useState(undefined);

  useEffect(() => {
    switch(currentOpt.value) 
    {
      case 1:
        setErrMsg(undefined);
        dispatch(getAllRecipes());
        dispatch(setIndex(0));
        break;

      case 2:
        if(username)
        {
          dispatch(getMyRecipes(username));
          dispatch(setIndex(0));
        }
        else
        {
          setErrMsg("to view your recipes!");
          dispatch(clearRecipes());
        }
        break;

      case 3:
        if(username)
        {
          dispatch(getMyLikedRecipes(uid));
          dispatch(setIndex(0));
        }
        else
        {
          setErrMsg("to view your liked recipes!");
          dispatch(clearRecipes());
        }
        break;

      default:
        dispatch(getAllRecipes());
        dispatch(setIndex(0));
        break;
    }
  }, [dispatch, uid, username, currentOpt, recipeCount]);

  const handlePrevious = () => {
    if (recipeCount === 0) return;
    if (recipeIndex <= 0) return dispatch(setIndex(recipeCount - 1));
    dispatch(previous());
  };

  const handleNext = () => {
    if (recipeIndex >= recipeCount - 1) return dispatch(setIndex(0));
    dispatch(next());
  };

  return (
    <section className="min-h-screen">
      <section className="flex justify-around items-center font-bold max-w-4xl mx-auto mt-10">
        <button
          onClick={() => handlePrevious()}
          title="Previous"
          className="text-white outline-none bg-blue-900 hover:bg-yellow-400 focus:bg-yellow-400 hover:text-blue-900 focus:text-blue-900 transition-colors rounded px-5 py-1.5"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2>
          Page {recipeCount === 0 ? 0 : recipeIndex + 1} out of {recipeCount}
        </h2>
        <button
          onClick={() => handleNext()}
          title="Next"
          className="text-white outline-none bg-blue-900 hover:bg-yellow-400 focus:bg-yellow-400 hover:text-blue-900 focus:text-blue-900 transition-colors rounded px-5 py-1.5"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </section>

      <div className="flex justify-evenly text-center max-w-4xl mx-auto mt-10">
        <Dropdown
          options={options} 
          onChange={e => setCurrentOpt(e)}
          value={currentOpt} 
          className="w-72"
          placeholderClassName="cursor-pointer text-white bg-blue-900 hover:bg-yellow-400 focus:bg-yellow-400 hover:text-blue-900 focus:text-blue-900 transition-colors rounded px-5 py-1.5 hover:shadow-lg hover:shadow-slate-600 focus:shadow-lg focus:shadow-slate-600"
          menuClassName="bg-blue-500 p-5 mt-1 rounded-lg shadow-lg shadow-slate-600"
        />
      </div>
      {errMsg ? (
        <section className="flex justify-center font-bold text-center text-xl md:text-3xl lg:text-3xl sm:text-lg mt-20">
          <button
            className="font-bold mr-2 text-blue-800 hover:text-white focus:text-white"
            onClick={() => navigate("/")}
          >
            Login
          </button>
          <h1 className="">
            {errMsg}
          </h1>
        </section>
      ):(    
        <>
          {recipeCount === 0 ? (
            <h2 className="font-bold text-center text-3xl mt-20">No Recipes</h2>
          ) : (
            <Recipe recipe={recipes[recipeIndex]} user={user} />
          )}
        </>
      )}
    </section>
  );
};

export default RecipeWrapper;
