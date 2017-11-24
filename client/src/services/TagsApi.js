const axios = require('axios')

const TagsApi = {
   	baseUrl: 'http://localhost:3000/tags',

    listTags: function(){
        return axios.get(this.baseUrl)
        	.then (res=> res.data.data)
    },
}

module.exports = TagsApi

