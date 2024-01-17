const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  ttlproducts: Number
});

module.exports = mongoose.model("Category", categorySchema);

// electronics (5)
// phone (5) laptop (6)
// android (2) and ios (3)