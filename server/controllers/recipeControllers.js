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

exports.getMyRecipes = async (req, res, next) => {
  try {
    const { username } = req.body;
    const [recipes, _] = await Recipe.findCreatedBy(username);
    res.status(200).json({ recipes });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

exports.createNewRecipe = async (req, res, next) => {
  try {
    const recipeData = req.body;
    const recipe = new Recipe(recipeData);
    await recipe.save();
    res.status(201).json({ message: "Recipe Created Successfully", recipe });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteRecipeById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Recipe.deleteById(id);
    res.status(204).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
