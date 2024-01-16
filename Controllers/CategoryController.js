const Category = require('../models/category.model');

exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const newCategory = await category.save();
    res.json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ... other controller actions for categories
