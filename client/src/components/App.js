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
				dogSelected:{}
			}
		}
	}

	setDogSelected = (dogSelected)=>{
		this.setState(prevState=>({
				config:{...prevState.config, dogSelected}
			})
		)
	}
				
	setAnyDogSelected = (anyDogSelected) =>{
		this.setState(prevState=>({
				config:{...prevState.config, anyDogSelected}
			})
		)
	}
	
	setPoints = (addPoints)=>{
		const points = this.state.config.dogSelected.points + addPoints
		const changedDog = this.state.config.dogSelected
		changedDog.points = points

		this.setState(prevState=>({
				config:{...prevState.config, changedDog}
			})
		)
		DogsApi.updatePoints(this.state.config.dogSelected._id, points)
	}

  	render() {
	    return (
	     	<div className="App">
	          	<Header 
	          		config = {this.state.config}/>
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
