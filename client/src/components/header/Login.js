import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import '../../styles/Login.css'
import UsersApi from '../../services/UsersApi'

import Xtorage from '../../Xtorage'

class Login extends Component{
	constructor(){
		super()
		this.state={
			username:'',
			password:'',
			redirect: false
		}
	}
	setUsername = (username) =>{
		this.setState({username})
	}
	setPassword = (password) =>{
		this.setState({password})
	}
	setRedirect = (redirect) =>{
		this.setState({redirect})
	}
	changeUsername = (e) =>{
		e.preventDefault()
		this.setUsername(e.target.value)
	}
	changePassword = (e) =>{
		e.preventDefault()
		this.setPassword(e.target.value)
	}
	login = ()=>{
		UsersApi.login(this.state.username,this.state.password)
			.then(token =>{
				Xtorage.session.setObject('token', { data: token })
				this.setRedirect(true)
			})
			.catch(err =>{
				console.log("no hay token")
			})
	}
	handleLogin = (e) =>{
		e.preventDefault()
		this.login()
	}
	handleonKeyPressed = (e) => {
		if(e.key === 'Enter'){
			this.login()
		}
	}

	render(){
		return (
			<div className="centerContent">
					<table className="tableLogin">
						<tr>
						    <td className="labelLogin">Email</td>
						    <td className="labelLogin">Password</td>
						</tr>
						<tr>	    
						    <td>
						    	<input 
						    		className="inputLogin" 
						    		type="text" 
						    		onChange={this.changeUsername}
						    		value={this.state.username}/>
						    </td> 
						    <td>
						    	<input 
						    		className="inputLogin" 
						    		type="password" 
						    		onChange={this.changePassword}
						    		onKeyPress={this.handleonKeyPressed}
						    		value={this.state.password}/>
						    </td> 
						    <td>
						    	<button 
									onClick={this.handleLogin}
									className="btn btn-success btnalign"
									>
									Login
								</button>
							</td>
						</tr>
					</table>
					{this.state.redirect
						?
						<Redirect to='/my-dogs'/>
						:
						undefined
					}
			</div>	
		)
	}
}

export default Login