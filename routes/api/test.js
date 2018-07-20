/** API Test route to see whether or not things are working in the application */
const express = require('express')
const middleware = require('../../libs/middleware')

module.exports = function(){
    //Create a Router instance, so we can mount routes on that and pass it up higher in the imports.
    const Router = express.Router()
    //We use this route to see if a user is logged in.
    Router.get('/specific', middleware.checkAuthentication, function(req, res){
        res.json({success: true})
    })
    //We use this route just to see if we can hit the server.
    Router.get('/general', function(req, res){
        res.json({success: true})
    })
    //Return the Router, since this has all the routes mounted on it and we have to user it higher up.
    return Router
}