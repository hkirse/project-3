module.exports = function(connection){
    require('./users')(connection)
    require('./events')(connection)
    require('./trails')(connection)
    return connection
}