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
    },
    addLike: function(idHistory,idDog){
        return axios.post(this.baseUrl + '/addlike', { idHistory, idDog })
        	.then (res=> res.data.data)
    },
    addDislike: function(idHistory,idDog){
        return axios.post(this.baseUrl + '/adddislike', { idHistory, idDog })
        	.then (res=> res.data.data)
    },
    itsLiked: function(idHistory,idDog){
        return axios.get(this.baseUrl + '/itsliked/' + idHistory + '/' + idDog)
            .then (res=> res.data.data)
    },
    itsDisliked: function(idHistory,idDog){
        return axios.get(this.baseUrl + '/itsdisliked/' + idHistory + '/' + idDog)
            .then (res=> res.data.data)
    }
}

module.exports = HistoriesApi