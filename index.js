const express = require("express")
const bodyParser = require('body-parser')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api/destinations", require("./controllers/destinations"))

app.get("*", (req, res) => {
    res.send("Page Not Found")
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))