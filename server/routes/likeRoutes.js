const express = require("express");
const likeControllers = require("../controllers/likeControllers");
const router = express.Router();

router
  .route("/")
  .post(likeControllers.addLike)
  .delete(likeControllers.removeLike);

module.exports = router;
