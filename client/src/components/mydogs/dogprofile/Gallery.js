import React, {Component} from 'react'
import {Row, Modal, Button } from 'react-bootstrap'

import '../../../styles/mydogs/Gallery.css'

import DayPhotoApi from '../../../services/DayPhotoApi'

import GalleryDayPhoto from './GalleryDayPhoto'

class Gallery extends Component{
	constructor(){
		super()
		this.state = {
			dayPhotos:[],
			auxiliaryText:'Loading...'
		}
	}

	setDayPhotos = (dayPhotos) =>{
		this.setState({dayPhotos})
	}
	setAuxiliaryText = (auxiliaryText) =>{
		this.setState({auxiliaryText})
	}

	loadDayPhotos = (idDog) =>{
		DayPhotoApi.listAllByDogId(idDog)
			.then(dayPhotos=>{
				if(!dayPhotos.length)
					this.setAuxiliaryText('You do not have any photo')

				this.setDayPhotos(dayPhotos)
			}) 
	}

	componentDidMount(){
		this.loadDayPhotos(this.props.dog._id)
	}

	render(){
		return (
			<Modal {...this.props}>			
				<Modal.Header closeButton>   
					<h4 className="text-center">{this.props.dog.name + " gallery"}</h4>       					
				</Modal.Header>
			<Row>
				<Modal.Body>  
					{this.state.dayPhotos.length
						?
						<div className="text-center">
							{this.state.dayPhotos.map((dayPhoto,index) =>{
								return(
									<div key={index} className="displayInlineBlock">
										<div className="frame-128 frame-black-128">
										</div>
										<GalleryDayPhoto 
											dayPhoto={dayPhoto}/>
									</div>
								)	
							})}
						</div>
						:
						<h1 className="text-center">{this.state.auxiliaryText}</h1>

					}
				</Modal.Body>
			</Row>
				<Modal.Footer>
		            <Button onClick={this.props.onHide}>Close</Button>
		        </Modal.Footer>

		  </Modal>

		)
	}
}

export default Gallery