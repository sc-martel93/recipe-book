const Like = require('../models/Like');

exports.addLike = async (req, res, next) => {
  try {
    const { uid, pid } = req.body.data;
    const like = new Like(uid, pid);
    await like.save();
    return res.status(201).json({status: "ok", id: like.id});
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

exports.checkIfLiked = async (req, res, next) => {
  try {
    const { uid, pid } = req.body;
    const [result, _] = await Like.checkIfLiked(uid, pid);

    if (result.length === 0)
      return res.status(200).json({"status": "ok", "isLiked": false});

    return res.status(200).json({"status": "ok", "isLiked": true, "like_id": result[0].id})
  } catch (error) {
    console.log(error);
    next(error);
  }
}