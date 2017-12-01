import React, {Component} from 'react'
import {Row, Modal, Button } from 'react-bootstrap'

import '../../../styles/mydogs/Gallery.css'

import DayPhotoApi from '../../../services/DayPhotoApi'
import HistoriesApi from '../../../services/HistoriesApi'

import GalleryDayPhoto from './GalleryDayPhoto'

class Gallery extends Component{
	constructor(){
		super()
		this.state = {
			dayPhotos:[],
			historiesPhotos:[],
			auxiliaryText:'Loading...',
			auxiliaryTextDayPhotos:'Loading...',
			textButton:'Show Histories',
			showHistories:false
		}
	}

	setDayPhotos = (dayPhotos) =>{
		this.setState({dayPhotos})
	}
	setHistoriesPhotos = (historiesPhotos) =>{
		this.setState({historiesPhotos})
	}
	setAuxiliaryText = (auxiliaryText) =>{
		this.setState({auxiliaryText})
	}
	setAuxiliaryTextDayPhotos = (auxiliaryTextDayPhotos) =>{
		this.setState({auxiliaryTextDayPhotos})
	}
	setTextButton = (textButton) =>{
		this.setState({textButton})
	}
	setShowHistories = (showHistories) =>{
		this.setState({showHistories})
	}

	loadDayPhotos = (idDog) =>{
		DayPhotoApi.listAllByDogId(idDog)
			.then(dayPhotos=>{
				if(!dayPhotos.length)
					this.setAuxiliaryTextDayPhotos('You do not have any photo')

				this.setDayPhotos(dayPhotos)
			}) 
	}
	loadHistories = (idDog) =>{
		HistoriesApi.listByIdDog(idDog)
			.then(histories=>{
				if(!histories.length)
					this.setAuxiliaryText('You do not have any photo')

				this.setHistoriesPhotos(histories)
			})
	}
	handleSwitchPhotos = () =>{
		this.setAuxiliaryText('Loading...')
		this.setAuxiliaryTextDayPhotos('Loading...')
		if(this.state.showHistories){
			this.setTextButton('Show Histories')
			this.setShowHistories(false)
			if(!this.state.dayPhotos.length)
				this.setAuxiliaryTextDayPhotos('You do not have any photo')
		}else{
			this.setTextButton('Show Days Photos')
			this.setShowHistories(true)
			if(!this.state.historiesPhotos.length)
				this.setAuxiliaryTextDayPhotos('You do not have any photo')
		}

	}

	componentDidMount(){
		this.loadDayPhotos(this.props.dog._id)
		this.loadHistories(this.props.dog._id)
	}

	render(){
		return (
			<Modal {...this.props}>			
				<Modal.Header closeButton>   
					<h4 className="text-center">{this.props.dog.name + " gallery"}</h4>       					
				</Modal.Header>
			<Row>
				<Modal.Body>  
					<div className="textCenter">
						<button 
							className="btn btn-info"
							onClick={this.handleSwitchPhotos}
							>
							{this.state.textButton}
						</button>
					</div>
					{this.state.showHistories
						?
						<div>
							{this.state.historiesPhotos.length
								?
								<div className="text-center">
									{this.state.historiesPhotos.map((historyPhoto,index) =>{
										return(
											<div key={index} className="displayInlineBlock">
												<GalleryDayPhoto 
													dayPhoto={historyPhoto}/>
											</div>
										)	
									})}
								</div>
								:
								<h1 className="text-center">{this.state.auxiliaryText}</h1>

							}
						</div>
						:
						<div>
							{this.state.dayPhotos.length
								?
								<div className="text-center">
									{this.state.dayPhotos.map((dayPhoto,index) =>{
										return(
											<div key={index} className="displayInlineBlock">
												<GalleryDayPhoto 
													dayPhoto={dayPhoto}/>
											</div>
										)	
									})}
								</div>
								:
								<h1 className="text-center">{this.state.auxiliaryTextDayPhotos}</h1>

							}
						</div>
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