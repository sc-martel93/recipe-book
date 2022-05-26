import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import RecipePage from "./pages/Recipes/RecipePage";


function App() {
  return (
    <BrowserRouter>
      <main className="h-100 min-h-screen bg-blue-300 font-poppins">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="recipes" element={<RecipePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
