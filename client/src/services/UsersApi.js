import axios from 'axios'

const UsersApi = {
   	baseUrl: 'http://localhost:3000/auth',

    login: function(username,password){
        return axios.post(this.baseUrl + '/login',{username, password})
        	.then (res=> res.data.data)
    },
    register: function(username,password){
    	 return axios.post(this.baseUrl + '/register',{username, password})
        	.then (res=> res.data.data)	
    }
}

export default UsersApi
