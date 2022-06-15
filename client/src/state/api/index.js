import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const fetchRecipes = () => axios.get(`${URL}/recipes`);

export const fetchMyRecipes = (username) => axios.get(`${URL}/recipes/myrecipes/${username}`);

export const fetchLikedRecipes = (uid) => 
  axios.get(`${URL}/recipes/myrecipes/liked/${uid}`);

export const createRecipe = (newRecipe) => axios.post(`${URL}/recipes`, newRecipe);

export const updateRecipe = (recipeData) => axios.put(`${URL}/recipes`, recipeData);

export const deleteRecipe = (id) => axios.delete(`${URL}/recipes/`, {data: {id: id}});

export const createUser = (newUser) =>
  axios
    .post(`${URL}/user/register`, newUser)
    .then(res => res.data)
    .catch(err => err);
    
export const loginUser = (userInfo) =>
  axios
    .post(`${URL}/user/login`, userInfo)
    .then(res => res.data)
    .catch(err => {
      if(err.response)
        return err.response.data;

      return err;
    });
  
export const addLike = (uid, pid) => 
  axios.post(`${URL}/likes`, { data: { uid: uid, pid: pid } });

export const removeLike = (id) => 
  axios.delete(`${URL}/likes`, { data: { like_id: id } });

export const checkIfLiked = (uid, pid) => 
  axios
    .put(`${URL}/likes/recipe`, {uid: uid, pid: pid });

export const countLikes = (pid) =>
  axios.put(`${URL}/likes/recipes`, {pid: pid});
      