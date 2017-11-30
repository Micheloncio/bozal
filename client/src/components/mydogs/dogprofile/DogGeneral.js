import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'
import {Image} from 'react-bootstrap'

import Gallery from './Gallery'

class DogGeneral extends Component{
	constructor(){
		super()

		this.state={
			modalShow: false,
			textDog: 'Guau Guau'
		}
	}

	setModalShow = (modalShow) => {
		this.setState({modalShow})
	}
	setTextDog = (textDog) => {
		this.setState({textDog})
	}
	randomComentary = () =>{
		const random = Math.floor((Math.random()*9)+1)
		switch(random){
			case 1:
				this.setTextDog(`I'm ${this.props.dog.name}`)
				break
			case 2:
				this.setTextDog('I love my owner')
				break
			case 3:
				this.setTextDog('I want popcorns!')
				break
			case 4:
				this.setTextDog("I'm hungry...")
				break
			case 5:
				this.setTextDog('Guau Guau')
				break
			case 6:
				this.setTextDog('I hate fleas')
				break
			case 7:
				this.setTextDog("Hi, I'm here")
				break
			case 8:
				this.setTextDog('You scratch me?')
				break
			case 9:
				this.setTextDog('Throw me the ball!!')
				break
			default:
				this.setTextDog(`I'm ${this.props.dog.name}`)
		}
	}
	onHoverPhoto = () =>{
		this.randomComentary()
	}
	handleSeeGallery=()=>{
		this.setModalShow(!this.state.modalShow)
	}

	render(){
		return(
			<div className="container-fluid">
				<div className="row btnDogProfileContainer">
					<button 
						className="outlineNone glyphicon glyphicon-chevron-left btnDogProfileFormat"
						onClick={this.props.deselectADog}>

					</button>
				</div>
				<div className="dogGeneralContainer">
					<div className="row">
						<h1 className="h1DogProfile cursorDefault">{this.props.dog.name.toUpperCase()}</h1>
					</div>
					<div className="row">
						<Image 
							className="imageDogProfile"
							src={this.props.dog.profilePhoto} 
							circle 
							width="256px"
							height="256px"
							data-tip data-for='dog'
							onMouseOver={this.onHoverPhoto}>
						</Image>
						<ReactTooltip  id='dog' className="tooltipDog" place="right" effect="solid">
							<p><strong>{this.state.textDog}</strong></p>
						</ReactTooltip>
					</div>
					<div className="row">
						<button className="btn btn-info btnSeeGallery" onClick={this.handleSeeGallery}>
							See gallery
						</button>
					</div>
					{this.state.modalShow 
					? 
					<Gallery
						show={this.state.modalShow} 
						onHide={this.handleSeeGallery}
						dialogClassName="custom-modal"
						dog={this.props.dog}
					/>
					:
					undefined
					}
				</div>
			</div>
		)
	}
}

export default DogGeneral