const express = require("express");
const userControllers = require("../controllers/userControllers");
const router = express.Router();

router.route("/register").post(userControllers.createUser);

module.exports = router;
