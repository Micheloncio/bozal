import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import CreateUser from './CreateUser'
import Wall from './wall/Wall'
import MyDogs from './mydogs/MyDogs'

class Main extends Component{

	render(){
		return (
			<div>
				<Route exact path='/' component={Home}/>
	          	<Route path='/create-user' component={CreateUser}/>
	          	<Route path='/my-dogs' render={() => ( 
	          			<MyDogs
	          				config={this.props.config}/> 
	          		)}/>
	          	<Route path='/wall' render={() => (
	          			<Wall
	          				myDogProfile={this.props.config.dogSelected}/>

	          		)}/>
			</div>
		)
	}
}

export default Main;