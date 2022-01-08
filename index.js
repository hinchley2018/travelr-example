const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log(`connected to mongodb ${mongoURI}`);
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/destinations", require("./controllers/destinations"));

app.get("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen(process.env.PORT, () => {
  console.log("listening on port", 3000);
});

const destinationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: String,
  continent: String,
  primary_language: String,
  timezone: String,
  currency: String,
  tickets_available: Number,
});

const DestinationModel = mongoose.model("destinations", destinationSchema);

async function getDestinations() {
  const destination = await DestinationModel.find();
  console.log("destinations", destination);
  console.log("first city", destination[0]);
}

getDestinations();
