import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "./state/actions/recipes";

import NavBar from "./components/NavBar/NavBar";
import RecipeWrapper from "./components/RecipeWrapper/RecipeWrapper";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className="h-100 min-h-screen bg-emerald-500">
      <NavBar />
      <RecipeWrapper />
    </div>
  );
}

export default App;
