/** API User route for CRUD operations on users of the tool */
//Node level imports
const express = require('express')
const middleware = require('../../libs/middleware')
//User level imports
const etcont = require('../../controllers/eventTrail')

module.exports = function () {
    //Create a Router instance, so we can mount routes on that and pass it up higher in the imports.
    const Router = express.Router()

    //Save a trail.
    Router.post('/trails/:id', function (req, res) {       
        etcont.saveTrail(req.connection, req.body, req.params)
            .then(newTrail => res.json(newTrail))
            .catch(err => {
            console.log(err)
            res.status(500)
            res.json({
            err: 'Internal Server Error',
            message: 'Unable to create a new trail.',
            stack: err
            })
        })
    })

    //Get a trail.
    Router.get('/trails/:id', function (req, res) {
        etcont.getTrail(req.connection, req.params.id)
            .then(trails => res.json(trails[0]))
            .catch(err => {
                console.log(err)
                res.status(500)
                res.json({
                    err: 'Internal Server Error',
                    message: 'Unable to get trails.',
                    stack: err
                })
            })
    })
    
    return Router
}