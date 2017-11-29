import React, {Component} from 'react'
import {Row, Modal, Button } from 'react-bootstrap'

import DogsApi from '../../../services/DogsApi'
import DogDetailModal from './DogDetailModal'



class DogProfileModal extends Component{
	constructor(){
		super()

		this.state={
			showDogToSee:false,
			dogToSee:{}
		}
	}
	setShowDogToSee = (showDogToSee) =>{
		this.setState({showDogToSee})
	}
	setDogToSee = (dogToSee) =>{
		this.setState({dogToSee})
	} 	

	loadDogProfile = (idDog) =>{
		DogsApi.retrieveDogById(idDog)
			.then(dog =>{
				if(dog[0]){
					this.setDogToSee(dog[0])
					this.setShowDogToSee(true)
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
						<h4 className="textCenter">{this.state.dogToSee.name ? this.state.dogToSee.name + " profile" : undefined}</h4>
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
								<h4 className="textCenter">Dog deleted</h4>
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