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

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  
  try {
    const [ user, _ ]= await User.find(username);
    
    if(user.length === 0)
      return res.status(404).json({ status: "error", message: "Incorrect login."})
    
    return res.status(201).json({ status: "ok", data: user });
    
  } catch (error) {
    return res.status(500).json({ status : "error", message: "Internal server error." })
  }
 
}

