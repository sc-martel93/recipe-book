import axios from "axios";

const URL = "http://localhost:3001/recipes";

export const fetchRecipes = () => axios.get(URL);
