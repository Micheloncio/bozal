import React, { Component } from 'react';

import '../styles/App.css';

import Header from './header/Header'
import Main from './Main'
import Footer from './Footer'
import DogsApi from '../services/DogsApi'

class App extends Component {
	constructor(){
		super()

		this.state = {
			config:{
				idUser:'1',
				anyDogSelected: false,
				dogSelected:{},
				tooltipShowed: true,
				tooltipCss: 'tooltipShow'
			}
		}
	}

	setDogSelected = (dogSelected)=>{
		this.setState(prevState=>({config:{...prevState.config, dogSelected}}))
	}			
	
	setAnyDogSelected = (anyDogSelected) =>{
		this.setState(prevState=>({config:{...prevState.config, anyDogSelected}}))
	}
	
	setTooltipShowed = (tooltipShowed)=>{
		this.setState(prevState=>({config:{...prevState.config, tooltipShowed}}))
	}
	setTooltipCss = (tooltipCss)=>{
		this.setState(prevState=>({config:{...prevState.config, tooltipCss}}))
	}
	
	setPoints = (addPoints)=>{
		const points = this.state.config.dogSelected.points + addPoints
		const changedDog = this.state.config.dogSelected
		changedDog.points = points

		this.setState(prevState=>({config:{...prevState.config, changedDog}})
)
		DogsApi.updatePoints(this.state.config.dogSelected._id, points)
	}

	switchTooltipStatus = () => {
		if(this.state.config.tooltipShowed === true)
			this.setTooltipCss('tooltipHide')
		else
			this.setTooltipCss('tooltipShow')

		this.setTooltipShowed(!this.state.config.tooltipShowed)
	}

  	render() {
	    return (
	     	<div className="App">
	          	<Header 
	          		config = {this.state.config}
	          		switchTooltipStatus={this.switchTooltipStatus}/>
	          	<Main 
	          		config = {this.state.config}
	          		setDogSelected={this.setDogSelected}
	          		setAnyDogSelected={this.setAnyDogSelected}
	          		setPoints={this.setPoints}/>
	          	<Footer />
	      </div>
	    );
  	}
}

export default App;
