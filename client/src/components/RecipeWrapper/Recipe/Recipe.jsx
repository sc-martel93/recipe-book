import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../../state/actions/recipes";
import { setIndex } from "../../../state/actions/recipeIndex";
import {
  addLike,
  removeLike,
  checkIfLiked,
  countLikes,
} from "../../../state/actions/likes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartH } from "@fortawesome/free-regular-svg-icons";
import EditForm from "./EditForm/EditForm";

const Recipe = ({ recipe, user }) => {
  const dispatch = useDispatch();

  const { name, created_by, ingredients, directions, notes } = recipe;
  // Recipe id
  const rid = recipe.id;
  const ingredientArray = ingredients.split(", ");

  const uid = user.uid;
  const username = user.username;
  const isAuth = created_by === username && username !== "";

  const [isEdit, setIsEdit] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState("");
  
  // Checks if current user liked recipe
  useEffect(() => {
    if (uid && rid) {
      dispatch(checkIfLiked(uid, rid))
        .then((res) => {
          if (res.isLiked) {
            setIsLiked(true);
            setLikeId(res.like_id);
          } else {
            setIsLiked(false);
            setLikeId("");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [rid, isLiked, dispatch, uid]);

  // counts likes for current recipe, resets edit state
  useEffect(() => {
    setIsEdit(false);
    dispatch(countLikes(rid, isLiked))
      .then((res) => setLikeCount(res))
      .catch((err) => {
        console.log(err);
        setLikeCount(0);
      });
  }, [rid, isLiked]);

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
    if (!user.isLoggedIn) return;

    if (isLiked) {
      dispatch(removeLike(likeId))
        .then((res) => {
          if (res.data.status === "ok") {
            setIsLiked(false);
            setLikeId("");
            return;
          }
        })
        .catch((err) => console.log(err));
    } else {
      dispatch(addLike(uid, rid))
        .then((res) => {
          if (res.data.status === "ok") {
            setIsLiked(true);
            setLikeId(res.data.id);
            return;
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {isEdit ? (
        <EditForm recipe={ recipe } setIsEdit= { setIsEdit } />
      ) : (
        <article className="lg:w-5/6 md:w-5/6 w-11/12 max-w-3xl mx-auto lg:px-10 md:px-10 px-5 lg:py-10 md:py-10 py-7 space-y-10 mt-10 break-words bg-yellow-100 rounded-lg shadow-lg shadow-slate-600">
          <section className="flex justify-between border-b-4 border-zinc-900">
            {isAuth && (
              <button
                title="Edit"
                onClick={() => setIsEdit((isEdit) => !isEdit)}
                className="outline-none lg:text-2xl md:text-xl text-lg hover:text-sky-500 focus:text-sky-500 ease-in duration-100"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            )}

            <section className="text-center w-full">
              <h2 className="text-3xl font-bold text-center py-2 mx-auto">
                {name}
              </h2>
              <h3 className="text-center py-2">By: {created_by}</h3>
            </section>

            {isAuth && (
              <button
                title="Delete"
                onClick={() => handleDelete()}
                className="outline-none lg:text-2xl md:text-xl text-lg  hover:text-red-700 focus:text-red-700 ease-in duration-100"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            )}
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
            <p className="mx-5">{likeCount}</p>
            <button
              title="like"
              onClick={() => handleLike()}
              className="text-red-700 text-2xl"
              disabled={!user.isLoggedIn}
            >
              {isLiked ? (
                <FontAwesomeIcon icon={faHeart} />
              ) : (
                <FontAwesomeIcon icon={faHeartH} />
              )}
            </button>
          </section>
        </article>
      )}
    </>
  );
};

export default Recipe;
