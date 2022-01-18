import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipe } from "../../../state/actions/recipes";

const InputForm = () => {
  const dispatch = useDispatch();
  const [recipeData, setRecipeData] = useState({
    name: "",
    ingredients: "",
    directions: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecipe(recipeData));

    setRecipeData({
      name: "",
      ingredients: "",
      directions: "",
      notes: "",
    });
  };

  return (
    <div className="bg-emerald-600">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mx-auto flex flex-col w-2/3 max-w-3xl"
      >
        <label className="mt-2">Name: </label>
        <input
          type="text"
          name="name"
          value={recipeData.name}
          onChange={(e) =>
            setRecipeData({ ...recipeData, name: e.target.value })
          }
          className="rounded px-2 py-1.5"
          required
        />

        <label className="mt-2">Ingredients: </label>
        <input
          type="text"
          name="ingredient"
          value={recipeData.ingredients}
          onChange={(e) =>
            setRecipeData({ ...recipeData, ingredients: e.target.value })
          }
          className="rounded px-2 py-1.5"
          required
        />

        <label className="mt-2">Directions: </label>
        <textarea
          name="directions"
          value={recipeData.directions}
          onChange={(e) =>
            setRecipeData({ ...recipeData, directions: e.target.value })
          }
          className="rounded px-2 py-1.5 resize-none"
          required
        />

        <label className="mt-2">Notes: </label>
        <textarea
          name="notes"
          value={recipeData.notes}
          onChange={(e) =>
            setRecipeData({ ...recipeData, notes: e.target.value })
          }
          className="rounded px-2 py-1.5 resize-none"
        />

        <button
          type="submit"
          className="outline-none bg-slate-300 hover:bg-cyan-400 focus:bg-cyan-400 transition-colors font-bold rounded px-5 py-1.5 my-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
