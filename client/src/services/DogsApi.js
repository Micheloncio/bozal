const axios = require('axios')

const DogsApi = {
    baseUrl: 'http://localhost:3000/dog',

    listDogsByUser: function(idUser){
        return axios.get(this.baseUrl + '/' + idUser)
        	.then (res=> res.data.data)
    },
    createDog: function(name, idUser, chip, idBreed, gender, birthdate, weight, profilePhoto ){
        return axios.post(this.baseUrl, { name, idUser, chip, idBreed, gender, weight,birthdate, profilePhoto })
        	.then (res=> res.data.data)
    },
}

module.exports = DogsApi