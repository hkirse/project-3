const mongoose = require('mongoose')
module.exports = function(connection){
    const TrailSchema = new mongoose.Schema({
        trailname: String,
        traillength: String,
        traillevel: String
    })
    connection.model('Trail', TrailSchema)
}