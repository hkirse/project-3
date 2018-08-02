import axios from "axios";

// retrieve News from the server
export default {
    // Write saved trails and Events to database
    saveEvent: function (Data,id) {
        return axios.post("/api/events/"+id,Data);
    },    
    saveTrail: function (Data,id) {
        return axios.post("/api/trails/"+id,Data);
    },
    // Get all saved Trails Events from the database
    getSavedEvents: function (uid) {
        return axios.get("/api/events/"+uid);
    },
    getSavedTrails: function (uid) {
        return axios.get("/api/trails/"+uid);
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

    // Fetch from external API calls
    getEvents: function () {
        return axios.get("/api/meetup");
    },
    getTrails: function (Data) {
        return axios.get("/api/trail",Data);
    }    
};