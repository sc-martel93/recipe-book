const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

exports.createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = new User(userData);
    const result = await user.save();

    if (result === "ER_DUP_ENTRY") {
      return res.status(409).json({ status: "error", message: "User name already exists" });
    }
    return res.status(201).json({ status: "ok", message: "User Created Successfully", username: user.username });
  } catch (error) {
    next(error);
    return res.status(503).json({ status: "error", message: "Service error" });
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const [ user , _ ] = await User.find(username);

    if(user.length === 0)
      return res.status(401).json({ status: "error", message: "Invalid credentials."})

    bcrypt.compare(password, user[0].password, (err, result) => {
      if(result){
        const token = jwt.sign({ id: user[0].id, username: user[0].username}, JWT_SECRET);

        return res.status(201).json({ status: "ok", token: token });
      }
      else
        return res.status(401).json({ status: "error", message: "Invalid credentials."});
    })
    
  } catch (error) {
      return res.status(500).json({ status : "error", message: "Internal server error." });
  }
 
}

