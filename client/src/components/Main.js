import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import CreateUser from './CreateUser'
import Wall from './wall/Wall'
import getimage from './getimage'

class Main extends Component{
	render(){
		return (
			<div>
				<Route exact path='/' component={Home}/>
	          	<Route path='/create-user' component={CreateUser}/>
	          	<Route path='/wall' component={Wall}/>
	          	<Route path='/getimage' component={getimage}/>
			</div>
		)
	}
}

export default Main;