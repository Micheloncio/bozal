import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import jwt from 'jsonwebtoken'

import '../../styles/CreateAccount.css'

import UsersApi from '../../services/UsersApi'
import Xtorage from '../../Xtorage'

class CreateAccount extends Component{
	constructor(){
		super()
		this.state={
			username: '',
			usernameClass: 'inputCreateAccount',
			password: '',
			passwordClass: 'inputCreateAccount',
			passwordConfirm: '',
			passwordConfirmClass: 'inputCreateAccount',
			showPassNoMatch: false
		}
	}
	setShowPassNoMatch = (showPassNoMatch) =>{
		this.setState({showPassNoMatch})
	}
	onChangeTextbox = (e) => {
		this.setState({[e.target.name]:e.target.value})
	}
	checkField = (field,fieldClass) =>{
		if(!field){
			this.setState({[fieldClass]:'inputCreateAccountRed'})
			return false
		}
		this.setState({[fieldClass]:'inputCreateAccount'})
		return true
	}
	checkAllFields = () =>{
		const checkUser = this.checkField(this.state.username,'usernameClass')
		const checkPass = this.checkField(this.state.password,'passwordClass')
		const checkPassConfirm = this.checkField(this.state.passwordConfirm,'passwordConfirmClass')
		
		if(!checkUser || !checkPass || !checkPassConfirm)
			return false

		if(this.state.password !== this.state.passwordConfirm){
			this.setShowPassNoMatch(true)
			return false
		}else{
			this.setShowPassNoMatch(false)
		}


		return true
	}
	createAccount = () =>{
		UsersApi.register(this.state.username, this.state.password)
			.then(() =>{
				UsersApi.login(this.state.username, this.state.password)
					.then(token =>{
						Xtorage.session.setObject('token', { data: token })
						const tokenDecoded = jwt.verify(token,'secretito-super-mega-secreto-que-nadie-sabe')
						this.props.setIdUser(tokenDecoded.id)
						this.props.loadDogs(tokenDecoded.id)
					})
			})
			.catch(err =>{
				console.log("no hay token")
			})
	}
	onClickCreateAccount = () =>{
		if(this.checkAllFields()){
			this.createAccount()
		}

	}

	render(){
		return (
			<div className="centerContent marginTop50px">
					<table className="tableCreateAccount">
						<tr>
							<th className="labelTitle" colspan="2">
								Create an account
							</th>
						</tr>
						<tr>
							<td className="labelSubTitle" colspan="2">
								It is free and will always be.
							</td>
						</tr>
						<div className="marginTop20px">
						<tr>
						    <td>
						    	<input 
						    		className={this.state.usernameClass}
						    		placeholder="User Name"
						    		name="username"
						    		onChange={this.onChangeTextbox}
						    		value={this.state.username}
						    		type="text" 
									/>
						    </td> 
						    
						</tr>
						<tr>	    
						    <td>
						    	<input 
						    		className={this.state.passwordClass}
						    		placeholder="Password"
						    		name="password"
						    		onChange={this.onChangeTextbox}
						    		value={this.state.password}
						    		type="password" 
						    	/>
						    </td>  
						</tr>
						<tr>	    
						    <td>
						    	<input 
						    		className={this.state.passwordConfirmClass}
						    		placeholder="Confirm Password"
						    		name="passwordConfirm"
						    		onChange={this.onChangeTextbox}
						    		value={this.state.passwordConfirm}
						    		type="password" 
						    	/>
						    </td> 
						    {this.state.showPassNoMatch
						    	?
						    	<td className="labelCreateAccount">
						    		Password do not match
						    	</td>
						    	:
						    	undefined
							}
						</tr>
						<tr>
							<td>
						    	<button 
									className="btn btn-success btnCreateAccount"
									onClick={this.onClickCreateAccount}
									>
									Create Account
								</button>
							</td>
						</tr>
						</div>
					</table>
			</div>	
		)
	}
}

export default CreateAccount