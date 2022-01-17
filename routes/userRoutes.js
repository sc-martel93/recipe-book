const express = require("express");
const recipeControllers = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(recipeControllers.createUser);

module.exports = router;
