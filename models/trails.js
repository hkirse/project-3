const mongoose = require('mongoose')
module.exports = function(connection){
    const TrailSchema = new mongoose.Schema({
        name: String,
        length: String,
        rating: String,
        difficulty: String
    })
    connection.model('Trail', TrailSchema)
}