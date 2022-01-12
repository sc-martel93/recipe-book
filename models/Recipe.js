const db = require("../config/db");

class Recipe {
  constructor(recipe) {
    const { id, name, ingredients, directions, notes } = recipe;
    this.id = id;
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
     VALUE (
        '${this.id}',
        '${this.name}',
        '${this.ingredients}',
        '${this.directions}',
        '${this.notes}'
     )`;

    return db.execute(sql);
  }

  static findAll = () => {
    const sql = `SELECT * FROM recipes ORDER BY name`;
    return db.execute(sql);
  };
}

module.exports = Recipe;
