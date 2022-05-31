const express = require("express");
const recipeControllers = require("../controllers/recipeControllers");
const router = express.Router();

router
  .route("/")
  .get(recipeControllers.getAllRecipes)
  .post(recipeControllers.createNewRecipe);

  router
    .route("/myrecipes")
    .get(recipeControllers.getMyRecipes)

router.route("/:id").delete(recipeControllers.deleteRecipeById);

module.exports = router;
