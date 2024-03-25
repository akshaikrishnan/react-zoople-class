const { createCategory, getCategory } = require("../services/category.service");

const create = async (req, res) => {
  try {
    console.log(req.body);
    const category = await createCategory(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const category = await getCategory();
    res.json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const removeCategory = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { create, getAll, removeCategory };
