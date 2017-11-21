import React, {Component} from 'react'
import {Image} from 'react-bootstrap'

class DogGeneral extends Component{

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
						<h1 className="h1DogProfile">{this.props.dog.name.toUpperCase()}</h1>
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
				</div>
			</div>
		)
	}
}

export default DogGeneral