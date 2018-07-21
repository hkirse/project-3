module.exports = function(connection){
    require('./users')(connection)
    require('./rides')(connection)
    return connection
}