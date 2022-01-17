const db = require("../config/db");
const bcrypt = require("bcrypt");

const saltRounds = 10;

class User {
  constructor({ id, name, password, email }) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
  }

  async save() {
    const sql =
      "INSERT INTO users (id, name, password, email) VALUES (?, ?, ?, ?)";

    bcrypt.hash(this.password, saltRounds, (err, hash) => {
      if (err) console.log(err);

      db.query(sql, [this.id, this.name, hash, this.email], (err, res) => {
        console.error(err);
      });
    });
  }
}

module.exports = User;
