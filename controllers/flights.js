const router = require("express").Router();

router.post("/", (req,res) => {
    flightsModel.insertOne(req.body)    
        .then(result => res.render("successpage"))
        .catch(err => {
            //what kind error?
            res.status(400).send({"errorMessage": err})
        })
})

router.get("/:flightNumber", (req, res) => {

})