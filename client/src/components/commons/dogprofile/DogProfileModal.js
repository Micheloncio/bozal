import React, {Component} from 'react'
import {Row, Col, Image, Modal, Button, FormGroup, Radio } from 'react-bootstrap'

import DogsApi from '../../../services/DogsApi'
import DogDetailModal from './DogDetailModal'



class DogProfileModal extends Component{
	constructor(){
		super()

		this.state={
			dogToSee:{}
		}
	}

	setDogToSee = (dogToSee) =>{
		this.setState({dogToSee})
	} 	

	loadDogProfile = (idDog) =>{
		DogsApi.retrieveDogById(idDog)
			.then(dog =>{
				this.setDogToSee(dog[0])
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
					<h4 className="textCenter">{this.state.dogToSee.name ? this.state.dogToSee.name + " profile" : undefined}</h4>
				</Modal.Header>
			<Row>
				<Modal.Body>  
		    				{this.state.dogToSee.name 
		    					?
			    				<DogDetailModal 
			    					config={this.props.config} 
									dog={this.state.dogToSee}/>
								:
								undefined
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