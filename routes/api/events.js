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
    Router.post('/events/:id', function (req, res) {
        etcont.saveEvent(req.connection, req.body, req.params)
            .then(newEvent => res.json(newEvent))
            .catch(err => {
            console.log(err)
            res.status(500)
            res.json({
            err: 'Internal Server Error',
            message: 'Unable to create a new Event.',
            stack: err
            })
        })

    })

    //Get events for a user.
    Router.get('/events/:id', function (req, res) {
        etcont.getEvent(req.connection, req.params.id)
            .then(events => res.json(events[0]))
            .catch(err => {
                console.log(err)
                res.status(500)
                res.json({
                    err: 'Internal Server Error',
                    message: 'Unable to get Events.',
                    stack: err
                })
            })
    })
    return Router
}