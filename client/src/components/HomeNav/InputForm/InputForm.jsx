import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "../../../state/actions/recipes";

const InputForm = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  
  const [recipeData, setRecipeData] = useState({
    name: "",
    created_by: user?.username,
    ingredients: "",
    directions: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.isLoggedIn) return;
  
    dispatch(createRecipe(recipeData));

    setRecipeData({
      name: "",
      created_by: "",
      ingredients: "",
      directions: "",
      notes: "",
    });

    props.setIsCreating(false);
    alert("Recipe Created!");
  };

  return (
    <section className="bg-blue-400">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mx-auto flex flex-col w-2/3 max-w-3xl"
        autoComplete="off"
      >
        <label
          htmlFor="name"
          className="mt-2"
        >Name: 
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Recipe Name"
          value={recipeData.name}
          onChange={(e) =>
            setRecipeData({ ...recipeData, name: e.target.value })
          }
          className="rounded px-2 py-1.5 outline-none hover:bg-yellow-200 focus:bg-yellow-200"
          required
          minLength="2"
          maxLength="45"
        />

        <label
          htmlFor="ingredients"
          className="mt-2"
        >Ingredients (comma between):  
        </label>
        <textarea
          type="text"
          id="ingredients"
          name="ingredients"
          value={recipeData.ingredients}
          placeholder="Ingredient 1, ingredient 2, ..."
          onChange={(e) =>
            setRecipeData({ ...recipeData, ingredients: e.target.value })
          }
          className="rounded px-2 py-1.5 outline-none resize-none hover:bg-yellow-200 focus:bg-yellow-200 h-20"
          required
          minLength="2"
          maxLength="500"
        />

        <label
          htmlFor="directions"
          className="mt-2"
        >Directions: 
        </label>
        <textarea
          id="directions"
          name="directions"
          value={recipeData.directions}
          placeholder="Directions..."
          onChange={(e) =>
            setRecipeData({ ...recipeData, directions: e.target.value })
          }
          className="rounded px-2 py-1.5 resize-none outline-none hover:bg-yellow-200 focus:bg-yellow-200 h-32"
          required
          minLength="2"
          maxLength="500"
        />

        <label
          htmlFor="notes"
          className="mt-2"
        >Notes: 
        </label>
        <textarea
          id="notes"
          name="notes"
          value={recipeData.notes}
          placeholder="Optional notes..."
          onChange={(e) =>
            setRecipeData({ ...recipeData, notes: e.target.value })
          }
          className="rounded px-2 py-1.5 resize-none outline-none hover:bg-yellow-200 focus:bg-yellow-200 h-32"
          maxLength="500"
        />

        <button
          type="submit"
          className="outline-none bg-slate-300 hover:bg-yellow-400 focus:bg-yellow-400 transition-colors font-bold rounded px-5 py-1.5 my-3"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default InputForm;
