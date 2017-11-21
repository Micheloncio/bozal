import React, { Component } from 'react';

import '../styles/App.css';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

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

	setDogSelected = (dogSelected) =>{
		this.setState(prevState=>({config:{...prevState.config, dogSelected}}))
	}
	setAnyDogSelected = (anyDogSelected) =>{
		this.setState(prevState=>({config:{...prevState.config, anyDogSelected}}))
	}

  	render() {
	    return (
	     	<div className="App">
	          	<Header />
	          	<Main 
	          		config = {this.state.config}
	          		setDogSelected={this.setDogSelected}
	          		setAnyDogSelected={this.setAnyDogSelected}/>
	          	<Footer />
	      </div>
	    );
  	}
}

export default App;
