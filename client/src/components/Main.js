import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Home from './home/Home'
import Wall from './wall/Wall'
import MyDogs from './mydogs/MyDogs'
import DailyContest from './dailycontest/DailyContest'

class Main extends Component{

	render(){
		return (
			<div>
				<Route exact path='/' component={Home}/>
	          	<Route path='/my-dogs' render={() => ( 
	          			<MyDogs
	          				config={this.props.config}
	          				setDogSelected={this.props.setDogSelected}
	          				setMyDogs={this.props.setMyDogs}
	          				setAnyDogSelected={this.props.setAnyDogSelected}
	          				loadDogs={this.props.loadDogs}/> 
	          		)}/>
	          	<Route path='/daily-contest' render={() => (
	          			<DailyContest
	          				config={this.props.config}
	          				myDogProfile={this.props.config.dogSelected}
	          				setPoints={this.props.setPoints}/>
	          		)}/>
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