const axios = require('axios')

const HistoriesApi = {
    baseUrl: 'http://localhost:3000/history',

    createHistory: function(nameDog, photo, idDog, tag, description){
        return axios.post(this.baseUrl, { nameDog, photo, idDog, tag, description})
            .then (res=> res.data.data)
    },
    getLast24HoursHistoriesByTag: function(tag){
        return axios.get(this.baseUrl + '/listbytag/' + tag)
        	.then (res=> res.data.data)
    },
    addComment: function(idHistory,comment,idDog){
        return axios.post(this.baseUrl + '/addcomment', { idHistory, comment, idDog })
        	.then (res=> res.data.data)
    },
    addLike: function(idHistory,idDog){
        return axios.post(this.baseUrl + '/like', { idHistory, idDog })
        	.then (res=> res.data.data)
    },
    addDislike: function(idHistory,idDog){
        return axios.post(this.baseUrl + '/dislike', { idHistory, idDog })
        	.then (res=> res.data.data)
    },
    deleteLike: function(idHistory,idDog){
        return axios.delete(this.baseUrl + '/like', {params:{ idHistory: idHistory, idDog: idDog }})
            .then (res=> res.data.data)
    },
    deleteDislike: function(idHistory,idDog){
        return axios.delete(this.baseUrl + '/dislike', {params:{ idHistory, idDog }})
            .then (res=> res.data.data)
    }
}

module.exports = HistoriesApi