const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const webhook = require("./controllers/webhook");

const app = express();

app.use(express.static("public"));
app.use(cors());

app.use("/webhook", webhook.middleware(), (req, res) => {
  Promise.all(req.body.events.map(webhook.handleLineEvent))
    .then(result => res.json(result))
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
});

app.use("/ping", (req, res)=>{
  res.send("ping callback");
})

const port = process.env.PORT || 3001;

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0-jhdn2.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen({ port }, () => {
      console.log(`API SERVER START`);
    });
  })
  .catch(e => {
    console.error(e);
    throw e;
  });
