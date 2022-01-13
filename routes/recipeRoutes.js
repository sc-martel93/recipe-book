const express = require("express");
const recipeControllers = require("../controllers/recipeControllers");
const router = express.Router();

router.route("/").get(recipeControllers.getAllRecipes);

module.exports = router;
