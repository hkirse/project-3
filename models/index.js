module.exports = function(connection){
    require('./users')(connection)
    require('./rides')(connection)
    require('./trails')(connection)
    return connection
}