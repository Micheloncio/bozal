const axios = require('axios')

const DogsApi = {
    baseUrl: 'http://localhost:3000/dog',

    listDogsByUser: function(idUser){
        return axios.get(this.baseUrl + '/' + idUser)
        	.then (res=> res.data.data)
    },
}

module.exports = DogsApi