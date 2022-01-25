import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecipePage from "./pages/Recipes/RecipePage";
import RegistrationPage from "./pages/Registration/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <main className="h-100 min-h-screen bg-emerald-500 font-poppins">
        <Routes>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="recipes" element={<RecipePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
