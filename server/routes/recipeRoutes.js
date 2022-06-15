const express = require("express");
const recipeControllers = require("../controllers/recipeControllers");
const router = express.Router();

router
  .route("/")
  .get(recipeControllers.getAllRecipes)
  .post(recipeControllers.createNewRecipe)
  .put(recipeControllers.updateRecipe)
  .delete(recipeControllers.deleteRecipeById);

router
  .route("/myrecipes/:username")
  .get(recipeControllers.getMyRecipes);

router
  .route("/myrecipes/liked/:uid")
  .get(recipeControllers.getMyLikedRecipes);

module.exports = router;
