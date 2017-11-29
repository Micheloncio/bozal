import Xtorage from '../Xtorage'
import axios from 'axios'

const TagsApi = {
   	baseUrl: 'http://localhost:3000/tags',

   	loadConfig: function(){
        const token = Xtorage.session.getObject('token')
        if(token){
            const config = {headers: {'Authorization': 'Bearer ' + token.data}}
            return config
        }
    },
    listTags: function(){
        return axios.get(this.baseUrl, this.loadConfig())
        	.then (res=> res.data.data)
    },
}

export default TagsApi

