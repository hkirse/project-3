const axios = require("axios");

module.exports = {
    getTrails: function(Data){
    return axios.get(`https://www.mtbproject.com/data/get-trails`,{
        params: {
          'key': Data.API_KEY,
          'lat': Data.lat,
          'lon': Data.long,
          'minLength':Data.distance,
          'maxResults':20,
          'minStars':2
        },
      }
    )
    }
}
