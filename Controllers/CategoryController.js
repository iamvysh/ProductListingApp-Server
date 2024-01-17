const Category = require('../Models/ CategorySchema');


exports.createCategory = async (req, res) => {
  try {
    const { name, parentCategoryId } = req.body;

    // Validate input
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    console.log(parentCategoryId);

    const parentCategory = parentCategoryId ? await Category.findById(parentCategoryId) : null;

    const category = new Category({ name, parentCategory });
    const newCategory = await category.save();

    res.json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating category' });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error fetching categories' });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const _id = req.params.id;
    const category = await Category.findById(_id).populate("parentCategory")

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching category' });
  }
};

