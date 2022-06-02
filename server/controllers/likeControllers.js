const Like = require('../models/Like');

exports.addLike = async (req, res, next) => {
  try {
    const { uid, pid } = req.body;
    const like = new Like(uid, pid);
    await like.save();
    return res.status(201).json({status: "ok"});
  } catch (error) {
    console.log(error);
    next(error);
  }
}