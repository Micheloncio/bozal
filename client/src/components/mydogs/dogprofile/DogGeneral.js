import React, {Component} from 'react'
import {Image} from 'react-bootstrap'

import Gallery from './Gallery'

class DogGeneral extends Component{
	constructor(){
		super()

		this.state={
			modalShow: false,
		}
	}

	setModalShow = (modalShow) => {
		this.setState({modalShow})
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
							height="256px">
						</Image>
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