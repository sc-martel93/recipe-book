const db = require("../config/db");
const uuid = require("uuid");

class Recipe {
  constructor(recipe) {
    const { name, created_by, ingredients, directions, notes } = recipe;
    this.id = uuid.v4();
    this.created_by = created_by;
    this.name = name;
    this.ingredients = ingredients;
    this.directions = directions;
    this.notes = notes;
    this.likes = 0;

    return this;
  }

  save() {
    const sql = `INSERT INTO recipes(
        id,
        created_by,
        name,
        ingredients,
        directions,
        notes,
        likes
     )
     VALUE ( ?, ?, ?, ?, ?, ?, ?)`;

    return db.execute(sql, [
      this.id,
      this.created_by,
      this.name,
      this.ingredients,
      this.directions,
      this.notes,
      this.likes
    ]);
  }

  static findAll = () => {
    const sql = `SELECT * FROM recipes ORDER BY name`;
    return db.execute(sql);
  };

  static deleteById = (id) => {
    const sql = "DELETE FROM recipes WHERE id = ?";
    return db.execute(sql, [id]);
  };
}

module.exports = Recipe;
