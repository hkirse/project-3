const mongoose = require('mongoose')
const Schema = mongoose.Schema;
module.exports = function(connection){
    const EventsSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        time: {
            type: Date,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    })
    connection.model('Event', EventsSchema)
}