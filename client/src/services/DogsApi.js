import Xtorage from '../Xtorage'
import axios from 'axios'

const DogsApi = {
    baseUrl: 'http://localhost:3000/dog',

    loadConfig: function(){
        const token = Xtorage.session.getObject('token')
        if(token){
            const config = {headers: {'Authorization': 'Bearer ' + token.data}}
            return config
        }
    },

    listDogsByUser: function(idUser){
        return axios.get(this.baseUrl + '/users/' + idUser, this.loadConfig())
        	.then(res=> res.data.data)
    },
    retrieveDogById: function(idDog){
        return axios.get(this.baseUrl + '/dog/' + idDog, this.loadConfig())
            .then(res=> res.data.data)
    },
    createDog: function(name, idUser, chip, idBreed, gender, birthdate, weight, profilePhoto ){
        return axios.post(this.baseUrl, { name, idUser, chip, idBreed, gender, weight,birthdate, profilePhoto }, this.loadConfig())
        	.then(res=> res.data.data)
    },
    updateDog: function(name, idDog, chip, idBreed, gender, birthdate, weight, profilePhoto ){
        return axios.put(this.baseUrl, { name, idDog, chip, idBreed, gender, weight,birthdate, profilePhoto }, this.loadConfig())
            .then(res=> res.data.data)
    },
    deleteDog: function(idDog){
        const token = Xtorage.session.getObject('token')
    	return axios.delete(this.baseUrl, {params:{ idDog: idDog }, headers: {'Authorization': 'Bearer ' + token.data}})
        	.then(res=> res.data.data)
    },
    updatePoints: function( idDog, points ){
        return axios.put(this.baseUrl + '/points', { idDog, points }, this.loadConfig())
            .then(res=> res.data.data)
    },
    searchDogs: function(search){
        return axios.get(this.baseUrl + '/search/' + search, this.loadConfig())
            .then(res=> res.data.data)
    }
}

export default DogsApi