const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/CategoryController');

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
module.exports = router;
