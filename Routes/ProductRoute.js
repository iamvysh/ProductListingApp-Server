const express = require('express');
const router = express.Router();
const productController = require('../Controllers/ProductController');

router.post('/', productController.addProduct);
router.get('/:categoryId', productController.getProductsByCategory);

module.exports = router;
