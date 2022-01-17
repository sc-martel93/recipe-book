const User = require("../models/User");

exports.createUser = async (req, res, next) => {
  try {
    const userData = req.body.user;
    const user = new User(userData);
    await user.save();
    res.status(201).json({ message: "User Created Successfully", user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
