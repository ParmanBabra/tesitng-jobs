const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let product = new Schema({
  name: { type: String, unique: true },
  price: { type: Number, required: true },
  image: { type: String },
  description: [String]
});

module.exports = mongoose.model("Product", product);
