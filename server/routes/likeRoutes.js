const express = require("express");
const likeControllers = require("../controllers/likeControllers");
const router = express.Router();

router
  .route("/")
  .post(likeControllers.addLike)
  .delete(likeControllers.removeLike);

router
  .route("/recipe")
  .put(likeControllers.checkIfLiked);

router
  .route("/recipes")
  .put(likeControllers.countLikes);

router
  .route("/user")
  .put(likeControllers.getLikedRecipes);

module.exports = router;
