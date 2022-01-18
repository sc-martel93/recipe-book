const db = require("../config/db");
const uuid = require("uuid");
const bcrypt = require("bcrypt");

class User {
  constructor({ name, password, email }) {
    this.id = uuid.v4();
    this.name = name;
    this.password = password;
    this.email = email;
  }

  async save() {
    const sql =
      "INSERT INTO users (id, name, password, email) VALUES (?, ?, ?, ?)";

    const hash = await hashPassword(this.password);
    return db
      .execute(sql, [this.id, this.name, hash, this.email])
      .catch((err) => {
        return err.code;
      });
  }
}

const hashPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

module.exports = User;
