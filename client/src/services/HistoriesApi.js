const axios = require('axios')

const HistoriesApi = {
    baseUrl: 'http://localhost:3000/history',

    getLast24HoursHistoriesByTag: function(tag){
        return axios.get(this.baseUrl + '/listbytag/' + tag)
        	.then (res=> res.data.data)
    },
    addComment: function(idHistory,comment,idDog){
        return axios.post(this.baseUrl + '/addcomment', { idHistory, comment, idDog })
        	.then (res=> res.data.data)
    }

}

module.exports = HistoriesApi