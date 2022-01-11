import { useSelector } from "react-redux";

import NavBar from "./components/NavBar/NavBar";
import Recipe from "./components/Recipe/Recipe";

function App() {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div className="h-screen bg-emerald-500">
      <NavBar />
      <Recipe recipe={recipes[0]} />
    </div>
  );
}

export default App;
