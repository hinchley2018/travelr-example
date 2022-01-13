const router = require("express").Router();
const {flightModel} = require("../models/schemas")
router.get("/", (req,res) => {
    flightModel.find({})
        .then(flights => res.send(flights))
        .catch(err => res.status(500).send(err))
})

router.post("/", (req,res) => {
    flightModel.create(req.body)    
        .then(result => res.send(`Created ${result._id}`))
        .catch(err => {
            //what kind error?
            res.status(400).send({"errorMessage": err})
        })
})

router.get("/:flightNumber", (req, res) => {
    res.status(404).send("Not Implemented")
})

module.exports = router;