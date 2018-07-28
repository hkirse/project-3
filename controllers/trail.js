const axios = require("axios");

module.exports = {
    getTrails: function(Data){
    return axios.get(`https://www.mtbproject.com/data/get-trails`,{
        params: {
          'key': Data.API_KEY,
          'lat': Data.lat,
          'lon': Data.long,
          'maxDistance':Data.distance,
          'maxResults':16,
          'minStars':2
        },
      }
    )
    }
}
