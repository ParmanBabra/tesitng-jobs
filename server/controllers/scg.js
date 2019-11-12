const express = require("express");
const router = express.Router();
const numbers = require("./../helper/number").numbers;
const Restaurant = require("./../models/restaurant");

// Home page route.
router.get("/numbers", (req, res) => {
  let array = [];
  for (let i = 0; i < 7; i++) {
    array.push(numbers(i + 1));
  }

  let results = {
    x: array[0],
    y: array[5],
    z: array[6]
  };

  res.json(results);
});

router.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.find({});
  const results = restaurants.map(restaurant => {
    let { place_id, location, name, vicinity, icon, rating } = restaurant;
    return { place_id, location, name, vicinity, icon, rating };
  });
  res.json(results);
});

module.exports = router;
