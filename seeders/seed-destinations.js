const destinations = [
    {
        city: "Lima",
        country: "Peru",
        continent: "South America",
        primary_language: "Spanish",
        timezone: "GMT-5",
        currency: "Nuevo Sol",
        
    }, {
        city: "New York",
        country: "United States",
        continent: "North America",
        primary_language: "English",
        timezone: "GMT-5",
        currency: "US Dollars",
        
    }, {
        city: "Seoul",
        country: "South Korea",
        continent: "Asia",
        primary_language: "Korean",
        timezone: "GMT+9",
        currency: "Korean Won",
        
    }, {
        city: "Rome",
        country: "Italy",
        continent: "Europe",
        primary_language: "Italian",
        timezone: "GMT+1",
        currency: "Euro",
        
    }, {
        city: "Cairo",
        country: "Egypt",
        continent: "Africa",
        primary_language: "Arabic",
        timezone: "GMT+2",
        currency: "Egyptian Pounds",
        
    }, {
        city: "Sydney",
        country: "Australia",
        continent: "Australia",
        primary_language: "Arabic",
        timezone: "GMT+11",
        currency: "Australian Dollars",
        
    }
]

const { Schema } = require("mongoose");
const {destinationModel} = require("../models/schemas")
//start with fresh db each time
destinationModel.deleteMany({})

destinationModel.insertMany(destinations)