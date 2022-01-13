const express = require("express")
const bodyParser = require('body-parser')
const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

// MONGOOSE
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log(`connected to MongoDB at ${process.env.MONGO_URI}`)
})

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api/destinations", require("./controllers/destinations"))
app.use("/api/flights", require("./controllers/flights"))

app.get("*", (req, res) => {
    res.send("Page Not Found")
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
