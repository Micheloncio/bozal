import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Xtorage from '../../Xtorage'

class Logout extends Component {
	constructor(){
		super()
		this.state={
			redirect: false
		}
	}
	setRedirect = (redirect) =>{
		this.setState({redirect})
	}

	handleLogout = () =>{
		Xtorage.session.clear()
		this.props.setAnyDogSelected(false)
		this.setRedirect(true)
	}
	render(){
		return(
			<div>
				<button 
					className="glyphicon glyphicon-off outlineNone btn_logout"
					onClick={this.handleLogout}>
				</button>
				{this.state.redirect
					?
					<Redirect to='/' />
					:
					undefined
				}
			</div>
		)
	}
}

export default Logout