import Xtorage from '../Xtorage'
import axios from 'axios'

const DayPhotoApi = {
   	baseUrl: 'http://localhost:3000/dayphoto',

    loadConfig: function(){
        const token = Xtorage.session.getObject('token')
        if(token){
            const config = {headers: {'Authorization': 'Bearer ' + token.data}}
            return config
        }
    },
    createDayPhoto: function(idDog, nameDog, photo){
        return axios.post(this.baseUrl, { idDog, nameDog, photo }, this.loadConfig())
        	.then (res=> res.data.data)
    },
    listAllByDogId:function(idDog){
        return axios.get(this.baseUrl + '/gallery/' + idDog, this.loadConfig())
            .then (res=> res.data.data)
    },
    retrieveRandomDayphoto: function(){
        return axios.get(this.baseUrl, this.loadConfig())
        	.then (res=> res.data.data)
    },
    retrieveDifferentRandomDayphoto: function(id){
        return axios.get(this.baseUrl + '/random/' +id, this.loadConfig())
        	.then (res=> res.data.data)
    },
    addLike: function(idDayphoto){
        return axios.put(this.baseUrl + '/like', { idDayphoto },this.loadConfig())
            .then(res=> res.data.data)
    }
}

export default DayPhotoApi
