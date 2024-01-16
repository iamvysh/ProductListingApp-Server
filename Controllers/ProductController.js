const Product = require('../models/product.model');

exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ... other controller actions for products
