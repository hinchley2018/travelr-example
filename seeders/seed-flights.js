const flights = [
    {
        "flight_number": "DA-1234",
        "airline": "Delta",
        "flight_duration_in_minutes": 90,
        "flight_mileage_in_km": 2000,
        "arrival_airport": "Dulles",
        "arrival_time": "01/12/2022",
        "departure_airport": "LaGuardia",
        "departure_time": "01/12/2022"
    },
    {
        "flight_number": "DA-0871",
        "airline": "Delta",
        "flight_duration_in_minutes": 96,
        "flight_mileage_in_km": 6500,
        "arrival_airport": "LAX",
        "arrival_time": "01/13/2022",
        "departure_airport": "IAH",
        "departure_time": "01/13/2022"
    }
]

const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`connected to MongoDB at ${process.env.MONGO_URI}`)
})
const { flightModel } = require("../models/schemas")

async function seedFlights() {
    //start with fresh db each time
    await flightModel.deleteMany({})

    await flightModel.insertMany(flights)
}

seedFlights()