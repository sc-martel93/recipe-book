import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateRecipe } from '../../../../state/actions/recipes';

const EditForm = ({ recipe, setIsEdit }) => {
  const dispatch = useDispatch();
  const [edName, setEdName] = useState(recipe.name);
  const [edIngredients, setEdIngredients] = useState(recipe.ingredients);
  const [edDirections, setEdDirections] = useState(recipe.directions);
  const [edNotes, setEdNotes] = useState(recipe.notes);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Only dispatch update is changes are made
    if(recipe.name !== edName || 
      recipe.ingredients !== edIngredients || 
      recipe.directions !== edDirections || 
      recipe.notes !== edNotes)
    {
      dispatch(updateRecipe({
        id: recipe.id,
        name: edName,
        created_by: recipe.created_by,
        ingredients: edIngredients,
        directions: edDirections,
        notes: edNotes,
      }))
    }
      
    setIsEdit(false);
  }

  return (
    <form
      className="mx-auto flex flex-col w-5/6 max-w-3xl mt-10 p-10 bg-blue-400 rounded-lg shadow-lg shadow-slate-600"
      autoComplete="off"
      onSubmit={e => handleSubmit(e)}
    >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={edName}
        onChange={(e) => setEdName(e.target.value)}
        required
        minLength="2"
        maxLength="45"
        className="rounded px-2 py-1.5 outline-none hover:bg-yellow-200 focus:bg-yellow-200"
      />
      <label htmlFor="ingredients" className="mt-2">
        Ingredients (comma between): 
      </label>
      <textarea
        type="text"
        id="ingredients"
        name="ingredients"
        value={edIngredients}
        onChange={(e) => setEdIngredients(e.target.value)}
        required
        minLength="2"
        maxLength="500"
        className="rounded px-2 py-1.5 outline-none resize-none hover:bg-yellow-200 focus:bg-yellow-200 h-20"
      />
      <label htmlFor="directions" className="mt-2">
        Directions
      </label>
      <textarea
        type="text"
        id="directions"
        name="directions"
        value={edDirections}
        onChange={(e) => setEdDirections(e.target.value)}
        required
        minLength="2"
        maxLength="500"
        className="rounded px-2 py-1.5 resize-none outline-none hover:bg-yellow-200 focus:bg-yellow-200 h-32"
      />
      <label htmlFor="notes" className="mt-2">
        Notes:{" "}
      </label>
      <textarea
        type="text"
        id="notes"
        name="notes"
        value={edNotes}
        onChange={(e) => setEdNotes(e.target.value)}
        maxLength="500"
        className="rounded px-2 py-1.5 resize-none outline-none hover:bg-yellow-200 focus:bg-yellow-200 h-32"
      />
      <button
        type="submit"
        className="outline-none bg-slate-300 hover:bg-yellow-400 focus:bg-yellow-400 transition-colors font-bold rounded px-5 py-1.5 mt-3"
      >
        Submit
      </button>
    </form>
  )
}

export default EditForm