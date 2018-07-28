import axios from "axios";

// retrieve News from the server
export default {
    // Fetch API stuff
    getEvents: function () {
        return axios.get("/api/meetup");
    },
    // Create new saved news in the database
    saveEvent: function (Data) {
        return axios.post("/api/news", Data);
    },
    getTrails: function (Data) {
        return axios.get("/api/trail",Data);
    },
    loginUser: function (Data) {
        return axios.post("/auth/login", Data);
    },
    loginTest: function () {
        return axios.get("/api/specific");
    },
    logoutUser: function (Data) {
        return axios.get("/auth/logout");
    },
    // Get all saved news in the database
    getSaved: function () {
        return axios.get("/api/news");
    },
    // Update a saved news in the database
    updateSaved: function (id,Data) {
        return axios.put("/api/news/" + id,Data);
    },
    // Delete a saved news from database
    deleteSaved: function (id) {
        return axios.delete("/api/news/" + id);
    }
};