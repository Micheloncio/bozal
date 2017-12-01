import Xtorage from '../Xtorage'
import axios from 'axios'

const HistoriesApi = {
    baseUrl: 'https://nameless-lowlands-64942.herokuapp.com/history',

    loadConfig: function(){
        const token = Xtorage.session.getObject('token')
        if(token){
            const config = {headers: {'Authorization': 'Bearer ' + token.data}}
            return config
        }
    },
    createHistory: function(nameDog, photo, idDog, tag, description){
        return axios.post(this.baseUrl, { nameDog, photo, idDog, tag, description}, this.loadConfig())
            .then (res=> res.data.data)
    },
    getLast24HoursHistoriesByTag: function(tag){
        return axios.get(this.baseUrl + '/listbytag/' + tag, this.loadConfig())
        	.then (res=> res.data.data)
    },
    listByIdDog: function(idDog){
        return axios.get(this.baseUrl + '/gallery/' + idDog, this.loadConfig())
            .then (res=> res.data.data)
    },
    addComment: function(idHistory,comment,idDog){
        return axios.post(this.baseUrl + '/addcomment', { idHistory, comment, idDog }, this.loadConfig())
        	.then (res=> res.data.data)
    },
    addLike: function(idHistory,idDog){
        return axios.post(this.baseUrl + '/like', { idHistory, idDog }, this.loadConfig())
        	.then (res=> res.data.data)
    },
    addDislike: function(idHistory,idDog){
        return axios.post(this.baseUrl + '/dislike', { idHistory, idDog }, this.loadConfig())
        	.then (res=> res.data.data)
    },
    deleteLike: function(idHistory,idDog){
        const token = Xtorage.session.getObject('token')
        return axios.delete(this.baseUrl + '/like', {params:{ idHistory: idHistory, idDog: idDog }, headers: {'Authorization': 'Bearer ' + token.data}})
            .then (res=> res.data.data)
    },
    deleteDislike: function(idHistory,idDog){
        const token = Xtorage.session.getObject('token')
        return axios.delete(this.baseUrl + '/dislike', {params:{ idHistory, idDog }, headers: {'Authorization': 'Bearer ' + token.data}})
            .then (res=> res.data.data)
    }
}

export default HistoriesApi