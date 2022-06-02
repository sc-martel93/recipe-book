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

  static delete = (id) => {
    const SQL = `DELETE FROM likes WHERE id = ?`;
    return db.execute(SQL, [id]);
  }

  static checkIfLiked = (uid, pid) => {
    const SQL = `SELECT id FROM likes WHERE user_id = ? AND post_id = ?`;
    return db.execute(SQL, [uid, pid]);
  }

  static countLikes = (pid) => {
    const SQL = `SELECT COUNT(*) AS like_count FROM likes WHERE post_id = ?`;
    return db.execute(SQL, [pid]);
  }

  getLikedPosts(uid) {

  }

}

module.exports = Like;