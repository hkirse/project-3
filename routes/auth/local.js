/** AUTH local routes for user authentication */
const express = require('express')
const passport = require('passport')

module.exports = function(){
    const Router = express.Router()
    Router.post('/login', passport.authenticate('local'), function(req, res){
        res.json(req.user)
    })
    Router.get('/logout', function(req, res){
        req.logout();
        res.json({success: true})
    })
    return Router
}