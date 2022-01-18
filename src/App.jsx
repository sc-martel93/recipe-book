import React from "react";

import NavBar from "./components/NavBar/NavBar";
import RecipeWrapper from "./components/RecipeWrapper/RecipeWrapper";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div className="h-100 min-h-screen bg-emerald-500 font-poppins">
      <NavBar />
      <Registration />
      <RecipeWrapper />
    </div>
  );
}

export default App;
