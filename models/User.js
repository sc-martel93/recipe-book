const db = require("../config/db");

class User {
  constructor({ id, name, password, email }) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
  }

  save() {
    const sql =
      "INSERT INTO users (id, name, password, email) VALUES (?, ?, ?, ?)";

    return db.execute(sql, [this.id, this.name, this.password, this.email]);
  }
}

module.exports = User;
