const router = require('express').Router()
const {destinationModel} = require('../models/schemas')

router.get("/", (req, res) => {
    destinationModel.find({})
        .then(destinations => res.send(destinations))
        .catch(err => res.status(500).send(err))
})

//Get by index
router.get("/:id", (req, res) => {
    
    res.status(404).send("Not Implemented")
})

//create
router.post("/", (req, res) => {
    
    
})

//update
router.put("/:id", (req, res) => {
   
})

//delete
router.delete("/:id", (req, res) => {
    
})

//export router
module.exports = router;