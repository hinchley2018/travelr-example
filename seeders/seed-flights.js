const { Schema } = require("mongoose");
const {flightModel} = require("../models/schemas")
//start with fresh db each time
flightModel.deleteMany({})

flightModel.insertMany({})