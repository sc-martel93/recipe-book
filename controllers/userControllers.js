const User = require("../models/User");

exports.createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = new User(userData);
    const result = await user.save();

    if (result === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "User name already exists" });
    }

    res
      .status(201)
      .json({ message: "User Created Successfully", name: user.name });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getUserId = async (req, res, next) => {
  try {
    let user = await User.findUserId(req.params.name);
    res.status(200).json({message: "User found", user});
  } catch (error) {
    console.log(error);
    next(error);
  }
}
