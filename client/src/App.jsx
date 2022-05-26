import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";

import RecipePage from "./pages/Recipes/RecipePage";
import RegistrationPage from "./pages/Registration/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <main className="h-100 min-h-screen bg-blue-300 font-poppins">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="recipes" element={<RecipePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
