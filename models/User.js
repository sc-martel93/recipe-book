const db = require("../config/db");
const uuid = require("uuid");
const bcrypt = require("bcrypt");

class User {
  constructor({ name, password }) {
    this.id = uuid.v4();
    this.name = name;
    this.password = password;
  }

  async save() {
    const sql =
      "INSERT INTO users (id, name, password) VALUES (?, ?, ?)";

    const hash = await hashPassword(this.password);
    return db
      .execute(sql, [this.id, this.name, hash])
      .catch((err) => {
        return err.code;
      });
  }

  static findUserId = (name) => {
    const sql = "SELECT id FROM users WHERE name = (?)";
    return db.execute(sql, [name]);
  };

}

const hashPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

module.exports = User;
