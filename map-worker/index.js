const Restaurant = require("./models/restaurant");
const mongoose = require("mongoose");
const ConnectionStates = mongoose.ConnectionStates;

mongoose.set("useCreateIndex", true);

const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise: Promise
});

let sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};

let loopResults = async results => {
  for (let i = 0; i < results.length; i++) {
    try {
      let result = results[i];
      let photoPath = null;

      if (result.photos && result.photos.length > 0) {
        photoPath = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photos[0].photo_reference}&sensor=false&key=${process.env.GOOGLE_API_KEY}`;
        console.log(`photo :${photoPath}`);
      }

      let {
        geometry: { location },
        name,
        place_id,
        types,
        vicinity,
        icon,
        rating
      } = result;

      let oldModel = await Restaurant.findOne({ place_id });

      if (oldModel) {
        let data = {
          location,
          name,
          types,
          vicinity,
          icon,
          rating,
          photo: photoPath
        };
        Restaurant.updateOne({ place_id }, data);

        console.info(`updated data: ${data}`);
      } else {
        let data = {
          place_id,
          location,
          name,
          types,
          vicinity,
          icon,
          rating,
          photo: photoPath
        };
        let model = new Restaurant(data);
        await model.save();

        console.info(`inserted data: ${data}`);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

let query = async () => {
  console.log("query places....");
  let results = await googleMapsClient
    .placesNearby({
      location: { lat: 13.8234866, lng: 100.5081204 },
      radius: 10000,
      keyword: "Bangsue",
      type: "restaurant"
    })
    .asPromise();

  await loopResults(results.json.results);

  while (results.json.next_page_token) {
    try {
      console.log("query places....");
      results = await googleMapsClient
        .placesNearby({
          pagetoken: results.json.next_page_token
        })
        .asPromise();

      await sleep(10000);

      await loopResults(results.json.results);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

mongoose
  .connect(
    `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo/${process.env.MONGO_DATABASE}`,
    { useNewUrlParser: true }
  )
  .then(async () => {
    await query();
    await mongoose.disconnect();
    process.exit();
  })
  .catch(async e => {
    if (mongoose.connection.states == ConnectionStates.connected) {
      await mongoose.disconnect();
    }
    console.error(e);
    throw e;
  });
