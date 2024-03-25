const { Category } = require("../models/blog.model");

async function createCategory(data) {
  try {
    const category = new Category(data);
    await category.save();
    return category;
  } catch (error) {
    throw error;
  }
}

async function getCategory() {
  try {
    const category = await Category.find();
    return category;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = { createCategory, getCategory };
