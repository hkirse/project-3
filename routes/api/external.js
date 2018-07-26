const express = require('express')
//User level imports
const mu = require('../../controllers/meetup')
// Variables
const API_KEY = "7523326462482714222e6e5c49322f46";


module.exports = function () {
    //Create a Router instance, so we can mount routes on that and pass it up higher in the imports.
    const Router = express.Router()
    //Get Events.
    Router.get('/meetup', function (req, res) {
        mu.getMeetups(API_KEY)
            .then(resp => {
                res.json(resp.data)
            })
            .catch(err => {
                console.log(err)
                res.status(500)
                res.json({
                    err: 'Internal Server Error',
                    message: 'Unable to get Events.',
                    stack: err
                })
            });
    })
    return Router
}