module.exports = {
    saveEvent: function (connection, data) {
        return connection.model('Event').create(data)
            .then(newEvent => {
                connection.model('User').findOneAndUpdate(
                    { _id: mongoose.Types.ObjectId(data.params.id) },
                    {
                        $push: {
                            users: newEvent._id
                        }
                    }, { new: true })
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            })
    },
    getEvent: function (connection, id) {
        return connection.model('Event').find({ _id: id })
            .populate({ path: 'comments', options: { sort: { date: -1 } } })
            .exec()
            .then(Events => Events)
    },
    saveTrail: function (connection, data) {
        return connection.model('Trail').create(data)
            .then(newTrail => newTrail)
    },
    getTrail: function (connection, id) {
        return connection.model('Trail').find({ _id: id })
            .exec()
            .then(Trails => Trails)
    },

    getTrailbyID: function (connection, id) {
        return connection.model('Trail').findById(id)
            .exec()
            .then(selectedTrail => selectedTrail)
    },
    editTrail: function (connection, id, data) {
        return connection.model('Trail').findByIdAndUpdate(id, data, { new: true })
            .exec()
            .then(Trail => Trail)
    },
    removeTrail: function (connection, id) {
        return connection.model('Trail').findByIdAndDelete(id)
            .exec()
            .then(Trail => Trail)
    }
}