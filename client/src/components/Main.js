import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import CreateUser from './CreateUser'
import Wall from './wall/Wall'
import MyDogs from './mydogs/MyDogs'
import DaysPhoto from './daysphoto/DaysPhoto'

class Main extends Component{

	render(){
		return (
			<div>
				<Route exact path='/' component={Home}/>
	          	<Route path='/my-dogs' render={() => ( 
	          			<MyDogs
	          				config={this.props.config}
	          				setDogSelected={this.props.setDogSelected}
	          				setAnyDogSelected={this.props.setAnyDogSelected}/> 
	          		)}/>
	          	<Route path='/days-photo' component={DaysPhoto}/>
	          	<Route path='/wall' render={() => (
	          			<Wall
	          				config={this.props.config}
	          				myDogProfile={this.props.config.dogSelected}
	          				setPoints={this.props.setPoints}/>

	          		)}/>
			</div>
		)
	}
}

export default Main;