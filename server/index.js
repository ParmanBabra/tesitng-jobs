const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const scg = require("./controllers/scg");
const app = express();


app.use(cors());
app.use("/scg", scg);

console.log(`connection string : mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo/${process.env.MONGO_DATABASE}`)

mongoose
  .connect(
    `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo/${process.env.MONGO_DATABASE}`,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen({ port: 3001 }, () => {
      console.log(`API SERVER START`);
    });
  })
  .catch(e => {
    console.error(e);
    throw e;
  });
