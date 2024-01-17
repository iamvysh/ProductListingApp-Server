const Product = require('../Models/ProductSchema');
const Category=require("../Models/ CategorySchema")

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;

    // Validate input
    if (!name || !price || !categoryId) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(400).json({ error: 'Invalid category' });
    }

    const product = new Product({ name, description, price, category });
    const newProduct = await product.save();

    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error adding product' });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const products = await Product.find({ category: categoryId }).populate("category")
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching products' });
  }
};




