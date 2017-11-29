import React, {Component} from 'react'
import {Row, Modal, Button } from 'react-bootstrap'
import swal from 'sweetalert2'

import DayPhotoApi from '../../../services/DayPhotoApi'

import NewDogPhoto from '../../mydogs/NavBarMyDog/AddDog/NewDogPhoto'
import Points from '../../../Points'

class NewDayPhoto extends Component{
	constructor(){
		super()

		this.state={
			dogPhoto:'',
			photoError: false,
		}
	}

	setDogPhoto = (dogPhoto) =>{this.setState({dogPhoto})}
	setPhotoError = (photoError) => {this.setState({photoError})}

	checkDogPhoto = () => {
		if(this.state.dogPhoto)
			return true
	}

	allAround = () =>{
		if(this.state.dogPhoto)
			return true
	}

	checkNewDayPhoto = () =>{
		if(!this.checkDogPhoto())
			this.setPhotoError(true)
		else
			this.setPhotoError(false)

		if(this.allAround())
			return true
	}

	createNewDayPhoto(){
		return DayPhotoApi.createDayPhoto(this.props.myDogProfile._id, this.props.myDogProfile.name, this.state.dogPhoto)
	}

	handleCreateDayPhoto = (e) =>{
		if(this.checkNewDayPhoto()){
			e.target.disabled = true
			this.props.setPoints(Points.addDayPhoto)
			this.createNewDayPhoto()
				.then(res=>{
					this.props.onHide()
					swal('Congratulations', 'Your photo has been successfully added', 'success')
				})
				.catch(console.error)
		}
	}

	handleSetDogPhoto = (dogPhoto) =>{
		this.setDogPhoto(dogPhoto)
	}

	render(){
		return (
				<Modal {...this.props}>
					
    				<Modal.Header closeButton>   
    					<h4>New Day Photo</h4>       					
    				</Modal.Header>
	        		<Row>
	        			<Modal.Body>  
	        				<NewDogPhoto 
	        					photoError={this.state.photoError}
	        					handleSetDogPhoto={this.handleSetDogPhoto}
	        					dogPhoto={this.state.dogPhoto}/>
						</Modal.Body>
					</Row>

						<Modal.Footer>
							{this.state.photoError
								? 
								<h5 className="checkError">Red fields required  </h5> 
								: undefined
							}
				            <Button onClick={this.props.onHide}>Close</Button>
				            <Button onClick={this.handleCreateDayPhoto}>Add dog</Button>
				        </Modal.Footer>

			     </Modal>
				)
	}
}

export default NewDayPhoto

