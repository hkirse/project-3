const mongoose = require('mongoose')
module.exports = function(connection){
    const RidesSchema = new mongoose.Schema({
        city: String,
        rating: String,
        lat: String,
        lon: String
    })
    connection.model('Ride', RidesSchema)
}