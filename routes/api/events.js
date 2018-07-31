/** API User route for CRUD operations on users of the tool */
//Node level imports
const express = require('express')
const middleware = require('../../libs/middleware')
//User level imports
const etcont = require('../../controllers/eventTrail')

module.exports = function () {
    //Create a Router instance, so we can mount routes on that and pass it up higher in the imports.
    const Router = express.Router()

    //Save an event for user.
    Router.post('/events', middleware.checkAuthentication, function (req, res) {

    })

    //Get events for a user.
    Router.get('/events', middleware.checkAuthentication, function (req, res) {

    })
    return Router
}