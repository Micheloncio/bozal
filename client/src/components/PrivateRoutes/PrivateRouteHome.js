import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Home from '../home/Home'
import MyDogs from '../mydogs/MyDogs'
import Xtorage from '../../Xtorage'


class PrivateRouteHome extends Component{

	render(){
		return (
			<div>
				{Xtorage.session.getObject('token') 
					?
		          	<Route exact path='/' render={() => ( 
		          			<MyDogs
		          				config={this.props.config}
		          				setDogSelected={this.props.setDogSelected}
		          				setMyDogs={this.props.setMyDogs}
		          				setAnyDogSelected={this.props.setAnyDogSelected}
		          				loadDogs={this.props.loadDogs}/> 
		          		)}/>
		          	:
		          	<Route exact path='/' component={Home}/>
	          	}
			</div>
		)
	}
}

export default PrivateRouteHome;