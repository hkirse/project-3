const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/crankhead' 
const connection = mongoose.createConnection(connectionString)
const models = require('../models')(connection)

models.model('User').create([
    {
        username: 'admin',
        firstName: 'Super',
        lastName: 'Admin',
        password: 'password'
    },
    {
        username: 'jmadison',
        firstName: 'James',
        lastName: 'Madison',
        password: 'password'
    },
    {
        username: 'gwashington',
        firstName: 'George',
        lastName: 'Washington',
        password: 'password'
    },
    {
        username: 'brodriguez',
        firstName: 'Bender',
        lastName: 'Rodriguez',
        password: 'password'
    },
    {
        username: 'cbug',
        firstName: 'Cat',
        lastName: 'Bug',
        password: 'password'
    }
]).then(data=>{
    console.log('Users created!')
})
.catch(err=>{
    console.log(err)
})