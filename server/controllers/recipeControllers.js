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
    const username = req.params.username;
    const [recipes, _] = await Recipe.findCreatedBy(username);
    res.status(200).json({ recipes });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

exports.getMyLikedRecipes = async (req, res, next) => {
  try {
    const { uid } = req.body;
    const [recipes, _] = await Recipe.getMyLikedRecipes(uid);
    res.status(200).json({ "status": "ok", recipes });
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

exports.updateRecipe = async (req, res, next) => {
  try {
    const recipeData = req.body;
    await Recipe.update(recipeData);
    res.status(200).json({ status: "ok", message: "Recipe Updated Successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

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
