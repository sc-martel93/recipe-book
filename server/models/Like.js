const db = require("../config/db");
const uuid = require("uuid");

class Like {
  constructor(uid, pid) {
    this.id = uuid.v4();
    this.user_id = uid;
    this.post_id = pid;

    return this;
  }

  save() {
    const SQL = `INSERT INTO likes (id, user_id, post_id) VALUE (?, ?, ?)`;
    return db.execute(SQL, [this.id, this.user_id, this.post_id]);
  }

  getLikedPosts(uid) {

  }

  getLikeCount(pid) {

  }

  deleteLike(uid, pid) {

  }
}

module.exports = Like;