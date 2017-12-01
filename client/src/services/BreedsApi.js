import Xtorage from '../Xtorage'
import axios from 'axios'

const BreedsApi = {
    baseUrl: 'https://nameless-lowlands-64942.herokuapp.com/breed',

    loadConfig: function(){
        const token = Xtorage.session.getObject('token')
        if(token){
            const config = {headers: {'Authorization': 'Bearer ' + token.data}}
            return config
        }
    },
    listBreeds: function(){
        return axios.get(this.baseUrl,this.loadConfig())
        	.then (res=> res.data.data)
    },
}

export default BreedsApi