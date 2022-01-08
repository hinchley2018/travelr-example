const express = require("express")
const bodyParser = require('body-parser')
require("dotenv").config()
const app = express()
const mongoose = require('mongoose');
// const destinations = require("./models/destinations");
const mongoURI = process.env.MONGO_URI;


mongoose.connect(mongoURI, {useNewUrlParser: true}, () =>{
    console.log(`connected to mongodb ${mongoURI}`)
});

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api/destinations", require("./controllers/destinations"))

app.get("*", (req, res) => {
    res.send("Page Not Found")
})

const destinationSchema = new mongoose.Schema({
    city: String,
    country: String,
    continent: String,
    primary_language: String,
    timezone: String,
    currency: String,
    tickets_available: Number,
});
//connect our database collection using this schema
const DestinationModel = mongoose.model('destination', destinationSchema)
// console.log(destinationSchema)
//some .find queries
async function getDestinations() {
    const destinations = await DestinationModel.find()
    console.log("destination", destinations)
    console.log("first city", destinations[0]);
}
app.listen(8000, () => {
    console.log("listening on port", 8000);

getDestinations()
});