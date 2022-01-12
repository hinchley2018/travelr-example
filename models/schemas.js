const { Schema } = require("mongoose");

//we added an airport, not every destination may have an airport
//customers may want to fly to a city then rent a car from there
let destinationSchema = new Schema({
    city: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    airportName: {type: String},
    primary_language: { type: String, required: true },
    timezone: { type: String, required: true },
    currency: { type: String, required: true },
})

//1:1 relationship with ticket
let passengerInfoSchema = new Schema({
    first_name: String,
    last_name: String
})

//we will use the mongo._id as the uuid to avoid colisions
let ticketSchema = new Schema({
    ticket_status: {
        type: String, 
        enum: ["Available", "Booked", "Boarded"]
    },
    flight_number: {type: String, required: true},
    class: {
        type: String,
        enum: ["First-Class", "Business", "Economy+", "Main Cabin"]
    },
    base_price_in_usd: {type: String, required: true },
    passengerInfo: passengerInfoSchema
})

//flight has a one-to-many relationship to tickets which is 
let flightSchema = new Schema({
    flight_number:  {type: String, required},
    airline: { type: String, required: true },
    departure_time: { type: Date, required: true },
    departure_airport: { type: String, required: true },
    arrival_time: { type: Date, required: true },
    arrival_airport: { type: String, required: true },
    flight_mileage_in_km: { type: Number, required: true },
    flight_duration_in_minutes: { type: Number, required: true },
    tickets : [ticketSchema]
})

//NOTE: we may separate tickets to its own collection at a later date, depending on the load on our api