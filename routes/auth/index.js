/** Default import for all routes under the auth folder */
//Node level imports
const express = require('express')

module.exports = function(){
    //Create a Router instance, so we can mount routes on that and pass it up higher in the imports.
    const Router = express.Router()
    //Mount the Route object generated and imported from local.js on this Router object.
    Router.use(require('./local')())
    //Return the Router, since this has all the routes mounted on it and we have to user it higher up.
    return Router
}