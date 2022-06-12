const express = require("express");
const recipeControllers = require("../controllers/recipeControllers");
const router = express.Router();

router
  .route("/")
  .get(recipeControllers.getAllRecipes)
  .post(recipeControllers.createNewRecipe)
  .put(recipeControllers.updateRecipe);

router
  .route("/myrecipes")
  .post(recipeControllers.getMyRecipes);

router
  .route("/myrecipes/liked")
  .put(recipeControllers.getMyLikedRecipes);

router.route("/:id").delete(recipeControllers.deleteRecipeById);

module.exports = router;
