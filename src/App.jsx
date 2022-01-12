import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import NavBar from "./components/NavBar/NavBar";
import Recipe from "./components/Recipe/Recipe";

function App() {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div className="h-screen bg-emerald-500">
      <NavBar />

      <div className="flex justify-around max-w-2/3 mt-5">
        <button className="bg-slate-300 hover:bg-cyan-600 hover:outline transition-colors rounded px-5 py-1.5">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="bg-slate-300 hover:bg-cyan-600 hover:outline transition-colors rounded px-5 py-1.5">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <Recipe
        recipe={
          recipes[0] || { name: "", ingredients: "", directions: "", notes: "" }
        }
      />
    </div>
  );
}

export default App;
