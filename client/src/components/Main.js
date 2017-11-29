import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import PrivateRouteHome from './PrivateRoutes/PrivateRouteHome'
import PrivateRouteMyDogs from './PrivateRoutes/PrivateRouteMyDogs'
import PrivateRouteDailyContest from './PrivateRoutes/PrivateRouteDailyContest'
import PrivateRouteWall from './PrivateRoutes/PrivateRouteWall'

class Main extends Component{

	render(){
		return (
			<div>
				<PrivateRouteHome 
					config={this.props.config}
      				setDogSelected={this.props.setDogSelected}
      				setMyDogs={this.props.setMyDogs}
      				setAnyDogSelected={this.props.setAnyDogSelected}
      				loadDogs={this.props.loadDogs}/>
      			<PrivateRouteMyDogs
      				config={this.props.config}
      				setDogSelected={this.props.setDogSelected}
      				setMyDogs={this.props.setMyDogs}
      				setAnyDogSelected={this.props.setAnyDogSelected}
      				loadDogs={this.props.loadDogs}/> 
      			<PrivateRouteDailyContest
      				config={this.props.config}
      				myDogProfile={this.props.config.dogSelected}
      				setPoints={this.props.setPoints}/>
      			<PrivateRouteWall
      				config={this.props.config}
      				myDogProfile={this.props.config.dogSelected}
      				setPoints={this.props.setPoints}/>
			</div>
		)
	}
}

export default Main;