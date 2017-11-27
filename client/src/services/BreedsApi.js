const axios = require('axios')

const BreedsApi = {
    baseUrl: 'http://localhost:3000/breed',

    listBreeds: function(){
        return axios.get(this.baseUrl)
        	.then (res=> res.data.data)
    },
}

module.exports = BreedsApi