const express = require("express");
const userControllers = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(userControllers.createUser);
router.route("/:name").get(userControllers.getUserId);

module.exports = router;
