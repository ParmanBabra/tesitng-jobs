const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

let user = new Schema({
  userId: { type: String, unique: true },
  itemCart: [ObjectId]
});

module.exports = mongoose.model("User", user);
