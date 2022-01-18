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
    const saltRounds = 10;

    bcrypt.hash(this.password, saltRounds, (err, hash) => {
      if (err) console.log(err);

      return db.query(
        sql,
        [this.id, this.name, hash, this.email],
        (err, res) => {
          console.error(err);
        }
      );
    });
  }
}

module.exports = User;
