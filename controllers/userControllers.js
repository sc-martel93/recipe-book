const User = require("../models/User");

exports.createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = new User(userData);
    const result = await user.save();

    if (result === "ER_DUP_ENTRY") {
      return res.status(409).json({ status: "error", message: "User name already exists" });
    }
    return res.status(201).json({ status: "ok", message: "User Created Successfully", name: user.name });
  } catch (error) {
    console.log(error);
    next(error);
    return res.status(503).json({ status: "error", message: "Service error" });
  }
};

