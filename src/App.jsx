import NavBar from "./components/NavBar/NavBar";
import RecipeWrapper from "./components/RecipeWrapper/RecipeWrapper";

function App() {
  return (
    <div className="h-100 min-h-screen bg-emerald-500">
      <NavBar />
      <RecipeWrapper />
    </div>
  );
}

export default App;
