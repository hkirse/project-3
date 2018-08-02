const mongoose = require("mongoose");
module.exports = {
    saveEvent: function (connection, data, params) {
        return connection.model('Event').create(data)
            .then(newEvent => {
                connection.model('User').findOneAndUpdate(
                    { _id: mongoose.Types.ObjectId(params.id) },
                    {
                        $push: {
                            events: newEvent._id
                        }
                    }, { new: true })
                    .then(dbModel => dbModel)
            })
    },
    getEvent: function (connection, id) {
        return connection.model('User').find({ _id: id })
            .populate({ path: 'events', options: { sort: { time: -1 } } })
            .exec()
            .then(Events => Events)
    },

    saveTrail: function (connection, data, params) {
        return connection.model('Trail').create(data)
        .then(newTrail => {
            connection.model('User').findOneAndUpdate(
                { _id: mongoose.Types.ObjectId(params.id) },
                {
                    $push: {
                        trails: newTrail._id
                    }
                }, { new: true })
                .then(dbModel => dbModel);
        })
    },
    getTrail: function (connection, id) {        
        return connection.model('User').find({ _id: id })
        .populate({ path: 'trails'})
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