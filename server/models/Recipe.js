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

    return this;
  }

  save() {
    const SQL = `INSERT INTO recipes(
        id,
        created_by,
        name,
        ingredients,
        directions,
        notes
     )
     VALUE ( ?, ?, ?, ?, ?, ?)`;

    return db.execute(SQL, [
      this.id,
      this.created_by,
      this.name,
      this.ingredients,
      this.directions,
      this.notes
    ]);
  }

  static update = ({id, name, ingredients, directions, notes}) => {
    const SQL = `UPDATE recipes 
      SET name = ?, ingredients = ?, directions = ?, notes = ? 
      WHERE id = ?`;

    return db.execute(SQL, [
      name,
      ingredients,
      directions,
      notes,
      id
    ])
  }

  static findAll = () => {
    const SQL = `SELECT * FROM recipes ORDER BY name`;
    return db.execute(SQL);
  };

  static getMyLikedRecipes = (uid) => {
    const SQL = `SELECT
                recipes.id,
                recipes.created_by,
                recipes.name,
                recipes.ingredients,
                recipes.directions,
                recipes.notes
                FROM recipes 
                INNER JOIN likes
                ON recipes.id = likes.post_id
                AND likes.user_id = (?)
                ORDER BY name;`

    return db.execute(SQL, [uid]);
  }

  static findCreatedBy = (username) => {
    const SQL = `SELECT * FROM recipes WHERE created_by = (?) ORDER BY name`;
    return db.execute(SQL, [username]);
  }

  static deleteById = (id) => {
    const SQL = "DELETE FROM recipes WHERE id = (?)";
    return db.execute(SQL, [id]);
  };
}

module.exports = Recipe;
