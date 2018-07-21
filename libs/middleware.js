/** Custom created middleware */
module.exports = {
    checkAuthentication: function(req, res, next){
        console.log(req.user)
        req.user ? next() : res.sendStatus(403)  
    },
    databaseHandler: function(connection){
        return function(req, res, next){
            req.connection = connection
            next()
        }
    }
}