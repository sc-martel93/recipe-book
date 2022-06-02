const Like = require('../models/Like');

exports.addLike = async (req, res, next) => {
  try {
    const { uid, pid } = req.body.data;
    const like = new Like(uid, pid);
    await like.save();
    return res.status(201).json({status: "ok"});
  } catch (error) {
    console.log(error);
    next(error);
  }
}

exports.removeLike = async (req, res, next) => {
  try {
    const { like_id } = req.body;
    Like.delete(like_id);
    return res.status(200).json({"status": "ok"});
  } catch (error) {
    console.log(error);
    next(error);
  }
}