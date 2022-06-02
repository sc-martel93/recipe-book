import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../../state/actions/recipes";
import { setIndex } from "../../../state/actions/recipeIndex";
import { addLike, removeLike, checkIfLiked } from "../../../state/actions/likes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faHeart} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartH } from "@fortawesome/free-regular-svg-icons";


const Recipe = ({ recipe, user }) => {
  const dispatch = useDispatch();
  
  const { name, created_by, ingredients, directions, notes, likes } = recipe;
  // Recipe id
  const rid = recipe.id;
  const ingredientArray = ingredients.split(", ");

  const uid = user.uid;
  const username = user.username;

  const isAuth = created_by === username && username !== "";

  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState("");

  useEffect(() => {
    if(uid !== "" && rid !== "")
    {
      dispatch(checkIfLiked(uid, rid))
        .then(res => {
          if (res.isLiked)
          {
            setIsLiked(true);
            setLikeId(res.like_id);
          }
          else
          {
            setIsLiked(false);
            setLikeId("");
          }
        })
        .catch(err => console.log(err));
    }
  }, [rid, isLiked, dispatch, uid] );

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (!confirmDelete) return;
    dispatch(deleteRecipe(rid));
    dispatch(setIndex(0));
  };

  const checkForNotes = (notes) => {
    if (notes === null || notes === "") return false;
    return true;
  };

  const handleLike = () => {
    // TODO set error message!
    if (!user.isLoggedIn) return;

    if (isLiked)
    {
      dispatch(removeLike(likeId))
        .then(res => {
          if (res.data.status === "ok")
          {
            setIsLiked(false);
            setLikeId("");
            return;
          }
        })
        .catch(err => console.log(err));
    }
    else
    {
      dispatch(addLike(uid, rid))
      .then(res => {
        if (res.data.status === "ok")
        {
          setIsLiked(true);
          setLikeId(res.data.id);
          return;
        } 
      })
      .catch(err => console.log(err))
    }
    
  }

  return (
    <article className="w-5/6 max-w-3xl mx-auto px-10 py-10 space-y-10 mt-10  break-words bg-yellow-100 rounded-lg shadow-lg shadow-slate-600">
      <section className="flex justify-between border-b-4 border-zinc-900">

        {isAuth &&
          <button
            title="Edit"
            className="outline-none text-xl hover:text-sky-500 hover:text-2xl focus:text-sky-500 focus:text-2xl ease-in duration-100"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        }

        <section className="text-center w-full">
          <h2 className="text-3xl font-bold text-center py-2 mx-auto">{name}</h2>
          <h3 className="text-center py-2">By: {created_by}</h3>
        </section>

        {isAuth &&
          <button
            title="Delete"
            onClick={() => handleDelete()}
            className="outline-none text-xl hover:text-red-700 hover:text-2xl focus:text-red-700 focus:text-2xl ease-in duration-100"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        }
        
      </section>
    
      <section>
        <h3 className="font-bold text-xl mb-2">Ingredients</h3>
        <ol className="list-disc">
          {ingredientArray.map((ingredient, index) => {
            return (
              <li key={index} className="ml-8 md:ml-7 lg:ml-10">
                {ingredient}
              </li>
            );
          })}
        </ol>
      </section>

      <section>
        <h3 className="font-bold text-xl mb-2">Directions</h3>
        <p className="ml-5 md:ml-7 lg:ml-10">{directions}</p>
      </section>

      {checkForNotes(notes) && (
        <section>
          <h3 className="font-bold text-xl mb-2">Notes</h3>
          <p className="ml-5 md:ml-7 lg:ml-10">{notes}</p>
        </section>
      )}

      <section className="flex justify-end items-center w-100">
        <p className="mx-5">{likes}</p>
        <button
          onClick={() => handleLike()}  
          className="text-red-700 text-2xl"
        >
          { isLiked ? 
              <FontAwesomeIcon icon={faHeart} />
            :
              <FontAwesomeIcon icon={faHeartH} />
          }
          
        </button>
      </section>
    
    </article>
  );
};

export default Recipe;
