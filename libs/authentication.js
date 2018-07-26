const uc = require('../controllers/user');
const bcrypt = require('bcrypt');

module.exports = function (connection) {
    return {
        authenticateUser: function (username, password, done) {
            connection.model('User').findOne({ username })
                .exec()
                .then(user => {
                    return bcrypt.compare(password, user.password)
                        .then(function (samePassword) {
                            if (!samePassword) {
                                done(null, false);
                            }
                            else {
                                done(null, user)
                            }
                        })
                        .catch(function (err) {
                            console.log("Error authenticating user: ");
                            done(err)
                        });
                }).catch(function (err) {
                    console.log("Error authenticating user: ");
                    done(err)
                });
        },
        serializeUser: function (user, done) {
            done(null, user.id)
        },
        deserializeUser: function (id, done) {
            uc.getUser(connection, id)
                .then(user => {
                    done(null, user)
                })
                .catch(err => {
                    done(err, null)
                })
        }
    }
}