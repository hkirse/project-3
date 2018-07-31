const express = require('express')
//User level imports
const mu = require('../../controllers/meetup')
const tr = require('../../controllers/trail')
// Variables
const API_KEYm = "5f30605f91c6c327d1c63475a6d6538";
const API_KEYt = '200314086-a6397adc73378ff9a37d61db5ae8145e';


module.exports = function () {
    //Create a Router instance, so we can mount routes on that and pass it up higher in the imports.
    const Router = express.Router()
    //Get Events.
    Router.get('/meetup', function (req, res) {
        mu.getMeetups(API_KEYm)
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
    //Get Trails.
    Router.get('/trail', function (req, res) {
        const Data={
            'API_KEY':API_KEYt,
            ...req.query
        }
        console.log(req.query)
        tr.getTrails(Data)
            .then(resp => {
                res.json(resp.data)
            })
            .catch(err => {
                //console.log(err)
                res.status(500)
                res.json({
                    err: 'Internal Server Error',
                    message: 'Unable to get Trails.',
                    stack: err
                })
            });
    })
    return Router
}