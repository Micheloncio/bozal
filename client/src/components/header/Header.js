import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import '../../styles/header/Header.css'

import HeaderDog from './HeaderDog'
import HeaderSearch from './headersearch/HeaderSearch'
import Xtorage from '../../Xtorage'
import Logout from './Logout'
import Login from './Login'

class Header extends Component {

	render(){
		return (
			<nav className='navbar navbar-white navbar-fixed'>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-5 col-sm-8 col-md-6 col-lg-6">
			               <div className="navbar-header">
			               		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			               			<span class="icon-bar"></span>
							        <span class="icon-bar"></span>
							        <span class="icon-bar"></span>
							    </button>
			               		<NavLink className="navbar-brand navbrand" to='/'>Yap Yap</NavLink>
			               	</div>
		               		<div className="collapse navbar-collapse" id="myNavbar">
									{Xtorage.session.getObject('token') 
										?
										<ul className="nav navbar-nav">
											<li><NavLink className="navlink" to='/my-dogs'>My Dogs</NavLink></li>
											<li><NavLink className="navlink" to='/daily-contest'>Daily Contest</NavLink></li>
											<li><NavLink className="navlink" to='/wall'>Walk</NavLink></li>
										</ul>
										:
										<ul className="nav navbar-nav">
											<li><NavLink className="navlink" to='/'>Home</NavLink></li>
										</ul>
									}
							</div>
						</div>

							{Xtorage.session.getObject('token') 
							?
							<div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
								<HeaderDog 
									config = {this.props.config}
									setDogSelected={this.props.setDogSelected}
									setAnyDogSelected={this.props.setAnyDogSelected}
									switchTooltipStatus={this.props.switchTooltipStatus}/>
							</div>
							:
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<Login 
									setIdUser={this.props.setIdUser}
									loadDogs={this.props.loadDogs}/>
							</div>
							}
						
							{Xtorage.session.getObject('token') 
							?
							<div className="hidden-xs hidden-sm col-md-2 col-lg-2">
								<HeaderSearch 
									config={this.props.config}/>
							</div>
							:
							undefined
							}
						
							{Xtorage.session.getObject('token') 
							?
							<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
								<Logout/>
							</div>
							:
							undefined
							}
					</div>
				</div>
			</nav>
		)
	}
}

export default Header;