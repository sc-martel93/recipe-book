const Recipe = require("../models/Recipe");

exports.getAllRecipes = async (req, res, next) => {
  try {
    const [recipes, _] = await Recipe.findAll();
    res.status(200).json({ recipes });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
