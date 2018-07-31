const axios = require("axios");

module.exports = {
    getMeetups: function(API_KEY){
    return axios.get("https://api.meetup.com/events",{
        params: {
          'key': API_KEY,
          'sign':true,
          'group_urlname':'torc-nc',
          'page':20
        },
      }
    )
    }
}

