import React, {Component} from 'react'
import {Row, Modal, Button } from 'react-bootstrap'

import DogsApi from '../../../services/DogsApi'
import DogDetailModal from './DogDetailModal'
import CapitalLetter from '../../../utilities/CapitalLetter'


class DogProfileModal extends Component{
	constructor(){
		super()

		this.state={
			showDogToSee:false,
			dogToSee:{},
			auxiliarText:'Loading...'
		}
	}
	setShowDogToSee = (showDogToSee) =>{
		this.setState({showDogToSee})
	}
	setDogToSee = (dogToSee) =>{
		this.setState({dogToSee})
	}
	setAuxiliarText = (auxiliarText) =>{
		this.setState({auxiliarText})
	} 	

	loadDogProfile = (idDog) =>{
		this.setAuxiliarText('Loading...')
		DogsApi.retrieveDogById(idDog)
			.then(dog =>{
				if(dog[0]){
					this.setDogToSee(dog[0])
					this.setShowDogToSee(true)
				}else{
					this.setAuxiliarText('Dog deleted')
				}
			})
			.catch()
	}
	componentDidMount(){
		this.loadDogProfile(this.props.idDog)
	}

	render(){
		return (
			<Modal {...this.props}>			
				<Modal.Header closeButton>  
					{this.state.showDogToSee
						?
						<h4 className="textCenter">{this.state.dogToSee.name ? CapitalLetter(this.state.dogToSee.name) + " profile" : undefined}</h4>
						:
						<h4 className="textCenter">No profile to show</h4>
					}
				</Modal.Header>
			<Row>
				<Modal.Body>  
		    				{this.state.showDogToSee
		    					?
			    				<DogDetailModal 
			    					config={this.props.config} 
									dog={this.state.dogToSee}/>
								:
								<h4 className="textCenter">{this.state.auxiliarText}</h4>
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

export default DogProfileModal