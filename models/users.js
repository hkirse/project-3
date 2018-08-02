const mongoose = require('mongoose')
const Schema = mongoose.Schema;
module.exports = function(connection){
    const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        trails:[{
            type: Schema.Types.ObjectId,
            ref: "Trail"
        }],
        events:[{
            type: Schema.Types.ObjectId,
            ref: "Event"
        }]
    })
    connection.model('User', UserSchema)
}