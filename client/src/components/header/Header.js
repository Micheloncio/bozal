import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import '../../styles/Header.css'

import HeaderDog from './HeaderDog'

class Header extends Component {

	render(){
		return (
			<nav className='navbar navbar-white navbar-fixed'>
				<div className="container-fluid">
					<div className="row">
					<div className="col-xs-6 col-sm-9 col-md-7">
		               <div className="navbar-header">
		               		<a className="navbar-brand navbrand" href="/">Yap Yap</a>
		               	</div>
	               		<div  className="navbar-collapse collapse">
							<ul className="nav navbar-nav">
								<li><NavLink className="navlink" to='/'>Home</NavLink></li>
								<li><NavLink className="navlink" to='/create-user'>Create user</NavLink></li>
								<li><NavLink className="navlink" to='/my-dogs'>My Dogs</NavLink></li>
								<li><NavLink className="navlink" to='/wall'>Walk</NavLink></li>
							</ul>
						</div>
					</div>
					<div className="col-xs-6 col-sm-3 col-md-3">
						<HeaderDog 
								config = {this.props.config}/>
					</div>
					<div className="col-xs-offset-0 col-sm-offset-0 col-md-offset-2">
					</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Header;