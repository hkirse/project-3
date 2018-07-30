const mongoose = require('mongoose')
module.exports = function(connection){
    const UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
    })
    connection.model('User', UserSchema)
}