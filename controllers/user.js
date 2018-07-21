module.exports = {
    createUser: function(connection, data){
        return connection.model('User').create(data)
        .then(newUser=>newUser)
    },
    getUsers: function(connection, ids){
        return connection.model('User').find(ids !== undefined ? {_id: ids} : {})
        .exec()
        .then(selectedUsers=>selectedUsers)
    },
    getUser: function(connection, id){
        return connection.model('User').findById(id)
        .exec()
        .then(selectedUser=>selectedUser)
    },
    editUser: function(connection, id, data){
        return connection.model('User').findByIdAndUpdate(id, data,{new:true})
        .exec()
        .then(user=>user)
    },
    removeUser: function(connection, id){
        return connection.model('User').findByIdAndDelete(id)
        .exec()
        .then(user=>user)
    }
}