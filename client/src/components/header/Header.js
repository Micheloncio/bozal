import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import '../../styles/header/Header.css'

import HeaderDog from './HeaderDog'
import HeaderSearch from './HeaderSearch'

class Header extends Component {

	render(){
		return (
			<nav className='navbar navbar-white navbar-fixed'>
				<div className="container-fluid">
					<div className="row">
					<div className="col-xs-6 col-sm-9 col-md-7 col-lg-7">
		               <div className="navbar-header">
		               		<a className="navbar-brand navbrand" href="/">Yap Yap</a>
		               	</div>
	               		<div  className="navbar-collapse collapse">
							<ul className="nav navbar-nav">
								<li><NavLink className="navlink" to='/'>Home</NavLink></li>
								<li><NavLink className="navlink" to='/my-dogs'>My Dogs</NavLink></li>
								<li><NavLink className="navlink" to='/days-photo'>Day's Photo</NavLink></li>
								<li><NavLink className="navlink" to='/wall'>Walk</NavLink></li>
							</ul>
						</div>
					</div>
					<div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
						<HeaderDog 
								config = {this.props.config}
								setDogSelected={this.props.setDogSelected}
								setAnyDogSelected={this.props.setAnyDogSelected}
								switchTooltipStatus={this.props.switchTooltipStatus}/>
					</div>
					<div className="hidden-xs hidden-sm col-md-2 col-lg-2">
						<HeaderSearch />
					</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Header;