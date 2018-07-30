const mongoose = require('mongoose')
module.exports = function(connection){
    const RidesSchema = new mongoose.Schema({
        street: String,
        city: String,
        state: String,
        zip: String
    })
    connection.model('Ride', RidesSchema)
}