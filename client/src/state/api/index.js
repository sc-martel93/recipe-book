import axios from "axios";

const URL = "http://localhost:3001";

export const fetchRecipes = () => axios.get(`${URL}/recipes`);
export const fetchMyRecipes = (username) => axios.post(`${URL}/recipes/myrecipes`, {username: username});

export const createRecipe = (newRecipe) => axios.post(`${URL}/recipes`, newRecipe);
export const deleteRecipe = (id) => axios.delete(`${URL}/recipes/${id}`);

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
      