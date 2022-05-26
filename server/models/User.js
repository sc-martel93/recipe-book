const db = require("../config/db");
const uuid = require("uuid");
const bcrypt = require("bcrypt");

class User {
  constructor({ name, password }) {
    this.id = uuid.v4();
    this.name = name;
    this.password = password;
  }

  async save () {
    const SQL =
      "INSERT INTO users (id, name, password) VALUES (?, ?, ?)";

    const hash = await hashPassword(this.password);
    return db
      .execute(SQL, [this.id, this.name, hash])
      .catch((err) => {
        return err.code;
      });
  }


  static async find (username) {
    const SQL = "SELECT * FROM users WHERE name = (?)";
    return db
      .execute(SQL, [ username ])
      .catch(err => {
        return err.code
      });
  }
  
}

const hashPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

module.exports = User;
