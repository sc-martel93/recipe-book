const db = require("../config/db");
const uuid = require("uuid");

class Recipe {
  constructor(recipe) {
    const { id, name, ingredients, directions, notes } = recipe;
    this.id = uuid.v4();
    this.name = name;
    this.ingredients = ingredients;
    this.directions = directions;
    this.notes = notes;

    return this;
  }

  save() {
    const sql = `INSERT INTO recipes(
        id,
        name,
        ingredients,
        directions,
        notes
     )
     VALUE ( ?, ?, ?, ?, ?)`;

    return db.execute(sql, [
      this.id,
      this.name,
      this.ingredients,
      this.directions,
      this.notes,
    ]);
  }

  static findAll = () => {
    const sql = `SELECT * FROM recipes ORDER BY name`;
    return db.execute(sql);
  };
}

module.exports = Recipe;
