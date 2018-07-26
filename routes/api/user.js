/** API User route for CRUD operations on users of the tool */
//Node level imports
const express = require('express')
const middleware = require('../../libs/middleware')
//User level imports
const uc = require('../../controllers/user')
const bcrypt = require('bcrypt');
const BCRYPT_SALT_ROUNDS = 8;

module.exports = function () {
    //Create a Router instance, so we can mount routes on that and pass it up higher in the imports.
    const Router = express.Router()
    //Get all the users.
    Router.get('/users', function (req, res) {
        uc.getUsers(req.connection)
            .then(users => {
                res.json(users)
            })
            .catch(err => {
                console.log(err)
                res.status(500)
                res.json({
                    err: 'Internal Server Error',
                    message: 'Unable to get users.',
                    stack: err
                })
            });
    })
    //Get a specific user by id.
    Router.get('/users/:id', function (req, res) {
        uc.getUsers(req.connection, [req.params.id])
            .then(users => res.json(users[0]))
            .catch(err => {
                console.log(err)
                res.status(500)
                res.json({
                    err: 'Internal Server Error',
                    message: 'Unable to get user.',
                    stack: err
                })
            })
    })
    //Add a new user. This is a protected route, so only logged in users can access this route.
    Router.post('/users', function (req, res) {
        //bcrypt
        const {body:{password}}=req;
        bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
            .then(function (hashedPassword) {
                req.body.password = hashedPassword;
                uc.createUser(req.connection, req.body)
                    .then(newUser => res.json(newUser))
                    .catch(err => {
                        console.log(err)
                        res.status(500)
                        res.json({
                            err: 'Internal Server Error',
                            message: 'Unable to create a new user.',
                            stack: err
                        })
                    })
            })
    })


    //Edits an existing user. This is a protected route, so only logged in users can access this route.
    Router.put('/users/:id', function (req, res) {
        uc.editUser(req.connection, req.params.id, req.body)
            .then(user => res.json(user))
            .catch(err => {
                console.log(err)
                res.status(500)
                res.json({
                    err: 'Internal Server Error',
                    message: 'Unable to edit user.',
                    stack: err
                })
            })
    })
    //Deletes a user. This is a protected route, so only logged in users can access this route.
    Router.delete('/users/:id', function (req, res) {
        uc.removeUser(req.connection, req.params.id)
            .then(user => res.json(user))
            .catch(err => {
                console.log(err)
                res.status(500)
                res.json({
                    err: 'Internal Server Error',
                    message: 'Unable to delete user.',
                    stack: err
                })
            })
    })
    return Router
}