import axios from "axios";

const URL = "http://localhost:3001";

export const fetchRecipes = () => axios.get(`${URL}/recipes`);
export const createRecipe = (newRecipe) => axios.post(`${URL}/recipes`, newRecipe);
export const deleteRecipe = (id) => axios.delete(`${URL}/recipes/${id}`);


export const createUser = (newUser) =>
{
  axios
    .post(`${URL}/user/register`, newUser);
}
  

export const loginUser = (userInfo) =>
  axios
    .post(`${URL}/user/login`, userInfo)
    .then(results => results)
    .catch(err => err.response); 
  