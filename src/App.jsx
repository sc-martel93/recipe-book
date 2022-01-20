import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import RecipeWrapper from "./components/RecipeWrapper/RecipeWrapper";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="h-100 min-h-screen bg-emerald-500 font-poppins">
        <NavBar />
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="recipes" element={<RecipeWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
