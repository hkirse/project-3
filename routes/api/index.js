/** Default import for all routes under the api folder */
//Node level imports
const express = require('express')

module.exports = function(){
    //Create a Router instance, so we can mount routes on that and pass it up higher in the imports.
    const Router = express.Router()
    //Mount the Route object generated and imported from test.js on this Router object.
    Router.use(require('./test')())
    //Mount the Route object generated and imported from user.js on this Router object.
    Router.use(require('./user')())
    //Mount the Route object generated and imported from external.js on this Router object.
    Router.use(require('./external')())
    //Return the Router, since this has all the routes mounted on it and we have to user it higher up.
    return Router
}