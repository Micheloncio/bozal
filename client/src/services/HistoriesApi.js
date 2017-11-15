const axios = require('axios')

const HistoriesApi = {
    baseUrl: 'http://localhost:3000/history',

    getLast24HoursHistoriesByTag: function(tag){
        return axios.get(this.baseUrl + '/last24hoursbytag/' + tag)
        	.then (res=> res.data.data)
    }

}

module.exports = HistoriesApi