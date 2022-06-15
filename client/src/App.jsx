import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import RecipePage from "./pages/Recipes/RecipePage";
import { setUser } from './state/actions/users'

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Checks if a user is saved on local storage and load their data
  useEffect(() => {
    let currentUser = JSON.parse(window.localStorage.getItem("RECIPE_USER"));
    
    if(currentUser?.isLoggedIn)
    {
      dispatch(setUser(currentUser));
      navigate("/recipes");
    }
  }, [])

  return (
    <main className="h-100 min-h-screen bg-blue-300 font-poppins">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="recipes" element={<RecipePage />} />
      </Routes>
    </main>
  );
}

export default App;
