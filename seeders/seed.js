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
        password: '123123'
    },
    {
        username: 'cbb',
        firstName: 'Berk',
        lastName: 'Biryol',
        password: '123123'
    },
    {
        username: 'hk',
        firstName: 'Henry',
        lastName: 'Kirse',
        password: '123123'
    },
    {
        username: 'nn',
        firstName: 'Ned',
        lastName: 'Nimocks',
        password: '123123'
    },
    {
        username: 'sp',
        firstName: 'Sharon',
        lastName: 'Prochazka',
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