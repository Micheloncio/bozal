const axios = require('axios')

const DayPhotoApi = {
   	baseUrl: 'http://localhost:3000/dayphoto',

    createDayPhoto: function(idDog, nameDog, photo){
        return axios.post(this.baseUrl, { idDog, nameDog, photo })
        	.then (res=> res.data.data)
    },
    retrieveRandomDayphoto: function(){
        return axios.get(this.baseUrl)
        	.then (res=> res.data.data)
    },
    retrieveDifferentRandomDayphoto: function(id){
        return axios.get(this.baseUrl + '/random/' +id)
        	.then (res=> res.data.data)
    },
    addLike: function(idDayphoto){
        return axios.put(this.baseUrl + '/like', { idDayphoto })
            .then(res=> res.data.data)
    }
}

module.exports = DayPhotoApi
