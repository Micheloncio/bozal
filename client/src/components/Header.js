import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Header.css'

import logo from '../images/logo.png'

class Header extends Component {

	render(){
		return (
			<nav className='navbar navbar-white navbar-fixed'>
				<div className="container-fluid">
	               <div className="navbar-header">
	               		<a className="navbar-brand navbrand" href="/">Yap Yap</a>
	               	</div>
               		<div  className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><NavLink className="navlink" to='/'>Home</NavLink></li>
							<li><NavLink className="navlink" to='/create-user'>Create user</NavLink></li>
							<li><NavLink className="navlink glyphicon glyphicon-road" to='/wall'>Walk</NavLink></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Header;