const uc = require('../controllers/user')

module.exports = function(connection){
    return {
        authenticateUser: function(username, password, done){
            connection.model('User').findOne({username})
            .exec()
            .then(user=>{
                if(user.password !== password){
                    done(null, false)
                }
                else{
                    done(null, user)
                }
            })
            .catch(err=>{
                done(err)
            })
        },
        serializeUser: function(user, done) {
            done(null, user.id)
        },
        deserializeUser: function(id, done) {
            uc.getUser(connection, id)
            .then(user=>{
                done(null, user)
            })
            .catch(err=>{
                done(err, null)
            })
        }
    }
}