const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let restaurant = new Schema(
  {
    place_id: { type: String, unique: true },
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    },
    name: { type: String, required: true },
    types: [String],
    vicinity: { type: String, required: true },
    icon: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String }
  },
  { id: false }
);

module.exports = mongoose.model("Restaurant", restaurant);
