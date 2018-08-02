const mongoose = require('mongoose')
const Schema = mongoose.Schema;
module.exports = function(connection){
    const TrailSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        length: {
            type: String,
            required: true
            },
        rating: {
            type: String,
            required: true
            },
        difficulty: {
            type: String,
            required: true
            },
        location: {
            type: String,
            required: true
            },
        image: {
            type: String,
            required: false
            },
        url: {
            type: String,
            required: true
        }
    })
    connection.model('Trail', TrailSchema)
}