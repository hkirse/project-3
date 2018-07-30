module.exports = {
    createUser: function (connection, data) {
        return connection.model('User').create(data)
            .then(newUser => newUser)
    },
    searchUser: function (connection, pars) {                
        if (pars[0].field === "email") {            
            return connection.model('User').find({ email: pars[0].value })
                .exec()
                .then(selectedUsers => selectedUsers)
        } else {
            return connection.model('User').find({username: pars[0].value })
                .exec()
                .then(selectedUsers => selectedUsers) 
        }
    },
    getUsers: function (connection, ids) {
        return connection.model('User').find(ids !== undefined ? { _id: ids } : {})
            .exec()
            .then(selectedUsers => selectedUsers)
    },
    getUser: function (connection, id) {
        return connection.model('User').findById(id)
            .exec()
            .then(selectedUser => selectedUser)
    },
    editUser: function (connection, id, data) {
        return connection.model('User').findByIdAndUpdate(id, data, { new: true })
            .exec()
            .then(user => user)
    },
    removeUser: function (connection, id) {
        return connection.model('User').findByIdAndDelete(id)
            .exec()
            .then(user => user)
    }
}