const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/crankhead'
const connection = mongoose.createConnection(connectionString)
const models = require('../models')(connection)
const bcrypt = require('bcrypt');
const BCRYPT_SALT_ROUNDS = 8;

models.model('User').create([
    {
        username: 'crankhead',
        firstName: 'Crank',
        lastName: 'Head',
        email: 'crank@head.com',
        password: '123123'
    },
    {
        username: 'cbb',
        firstName: 'Berk',
        lastName: 'Biryol',
        email: 'cbb@email.com',
        password: '123123'
    },
    {
        username: 'hk',
        firstName: 'Henry',
        lastName: 'Kirse',
        email: 'hk@email.com',
        password: '123123'
    },
    {
        username: 'nn',
        firstName: 'Ned',
        lastName: 'Nimocks',
        email: 'nn@email.com',
        password: '123123'
    },
    {
        username: 'sp',
        firstName: 'Sharon',
        lastName: 'Prochazka',
        email: 'sp@email.com',
        password: '123123'
    }
]).then(data => {
    console.log('Users created!');
    data.map(e => {
        bcrypt.hash(e.password, BCRYPT_SALT_ROUNDS)
        .then(function(hpass) {
            return models.model('User').findOneAndUpdate({ _id: e._id },
                { $set: { "password": hpass }})
            });;
        });        
        console.log('Passwords bcrypted!');     
        })
    .catch(err => {
        console.log(err)
    })