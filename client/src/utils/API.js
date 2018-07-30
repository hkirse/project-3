import axios from "axios";

// retrieve News from the server
export default {
    // Fetch from external API calls
    getEvents: function () {
        return axios.get("/api/meetup");
    },
    getTrails: function (Data) {
        return axios.get("/api/trail",Data);
    },
    // Write saved trails and Events to database
    saveEvent: function (Data) {
        return axios.post("/api/events", Data);
    },    
    saveTrail: function (Data) {
        return axios.post("/api/trails",Data);
    },
    //Authentication
    loginUser: function (Data) {
        return axios.post("/auth/login", Data);
    },
    loginTest: function () {
        return axios.get("/api/specific");
    },
    logoutUser: function () {
        return axios.get("/auth/logout");
    },
    // Registration
    registerUser: function (Data) {
        return axios.post("/api/register",Data)
    },
    checkRegister: function (Data) {
        return axios.get("/api/register",Data)
    },
    // Get all saved Trails Events from the database
    getSavedEvents: function () {
        return axios.get("/api/events");
    },
    getSavedTrails: function () {
        return axios.get("/api/trails");
    },
    // Update a saved trail in the database
    updateSavedTrail: function (id,Data) {
        return axios.put("/api/trails/" + id,Data);
    },
    // Delete a saved trail and event from database
    deleteTrail: function (id) {
        return axios.delete("/api/trails/" + id);
    },
    deleteEvent: function (id) {
        return axios.delete("/api/events/" + id);
    }
};