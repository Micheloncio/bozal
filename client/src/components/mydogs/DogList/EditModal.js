import React, {Component} from 'react'

import {Row, Col, Modal, Button } from 'react-bootstrap'

import DogsApi from '../../../services/DogsApi'

import EditDogField from './EditDogField'
import EditDogFieldDate from './EditDogFieldDate'
import EditDogSelectBreed from './EditDogSelectBreed'
import EditDogSelectGender from './EditDogSelectGender'
import EditDogPhoto from './EditDogPhoto'

class NewDog extends Component{
	constructor(){
		super()

		this.state={
			name:'',
			nameError: false,
			chip:'',
			chipError: false,
			breed:'',
			breedError:false,
			gender:'',
			genderError:false,
			birthdate:'',
			birthdateError:false,
			weight:'',
			weightError:false,
			dogPhoto:'',
			photoError: false,
		}
	}

	setName = (name) => {this.setState({name})}
	setNameError = (nameError) => {this.setState({nameError})}
	setChip = (chip) => {this.setState({chip})}
	setChipError = (chipError) => {this.setState({chipError})}
	setBreed = (breed) => {this.setState({breed})}
	setBreedError = (breedError) => {this.setState({breedError})}
	setGender= (gender) => {this.setState({gender})}
	setGenderError = (genderError) => {this.setState({genderError})}
	setBirthdate = (birthdate) => {this.setState({birthdate})}
	setBirthdateError = (birthdateError) => {this.setState({birthdateError})}
	setWeight = (weight) => {this.setState({weight})}
	setWeightError = (weightError) => {this.setState({weightError})}
	setDogPhoto = (dogPhoto) =>{this.setState({dogPhoto})}
	setPhotoError = (photoError) => {this.setState({photoError})}

	checkName = () => {
		if(this.state.name)
			return true
	}
	checkChip = () => {
		if(this.state.chip)
			return true
	}
	checkBreed = () => {
		if(this.state.breed)
			return true
	}
	checkGender = () => {
		if(this.state.gender)
			return true
	}
	checkBirthdate = () => {
		if(this.state.birthdate)
			return true
	}
	checkWeight = () => {
		if(this.state.weight)
			return true
	}
	checkDogPhoto = () => {
		if(this.state.dogPhoto)
			return true
	}

	allAround = () =>{
		if(this.state.name && this.state.chip && this.state.breed && this.state.gender && this.state.birthdate && this.state.weight && this.state.dogPhoto)
			return true
	}

	checkUpdateDog = () =>{

		if(!this.checkName())
			this.setNameError(true)
		else
			this.setNameError(false)

		if(!this.checkChip())
			this.setChipError(true)
		else
			this.setChipError(false)

		if(!this.checkBreed())
			this.setBreedError(true)
		else
			this.setBreedError(false)

		if(!this.checkGender())
			this.setGenderError(true)
		else
			this.setGenderError(false)

		if(!this.checkBirthdate())
			this.setBirthdateError(true)
		else
			this.setBirthdateError(false)

		if(!this.checkWeight())
			this.setWeightError(true)
		else
			this.setWeightError(false)

		if(!this.checkDogPhoto())
			this.setPhotoError(true)
		else
			this.setPhotoError(false)

		if(this.allAround())
			return true
	}

	updateDog(){
		return DogsApi.updateDog(this.state.name, this.props.dog._id, this.state.chip, this.state.breed, this.state.gender, this.state.birthdate, this.state.weight, this.state.dogPhoto)
	}

	handleUpdateDog = (e) =>{
		e.preventDefault()

		if(this.checkUpdateDog()){
			e.target.disabled = true
			this.updateDog()
				.then(res=>{
					this.props.loadDogs(this.props.idUser)
					this.props.onHide()
				})
				.catch(console.error)
		}
	}

	handleChangeName = (e) =>{
		this.setName(e.target.value)
	}
	handleChangeChip = (e) =>{
		this.setChip(e.target.value)
	}
	handleChangeBreed = (e) =>{
		this.setBreed(e.target.value)
	}
	handleChangeGender = (e) =>{
		this.setGender(e.target.value)
	}
	handleChangeBirthdate = (birthdate) =>{
		this.setBirthdate(birthdate)
	}
	handleChangeWeight = (e) =>{
		this.setWeight(e.target.value)
	}
	handleSetDogPhoto = (dogPhoto) =>{
		this.setDogPhoto(dogPhoto)
	}

	setAllFields = () =>{
		this.setName(this.props.dog.name)
		this.setChip(this.props.dog.chip)
		this.setBreed(this.props.dog.idBreed._id)
		this.setGender(this.props.dog.gender)
		this.setBirthdate(this.props.dog.birthdate)
		this.setWeight(this.props.dog.weight)
		this.setDogPhoto(this.props.dog.profilePhoto)
	}

	componentDidMount(){
		this.setAllFields()
	}

	render(){
		return (
				<Modal {...this.props}>
					
    				<Modal.Header closeButton>   
    					<h4>New Dog</h4>       					
    				</Modal.Header>
	        		<Row>
	        			<Modal.Body>  
	        				<EditDogPhoto 
	        					photoError={this.state.photoError}
	        					handleSetDogPhoto={this.handleSetDogPhoto}
	        					dogPhoto={this.state.dogPhoto}/>
							<Row>
			        			<Col xs={12} md={12}>
			        				<EditDogField 
			        					label="Name:"
			        					error={this.state.nameError}
			        					handleChange={this.handleChangeName}
			        					inputValue={this.state.name}
			        					inputType="text"/>
			        				<EditDogField 
			        					label="Chip:"
			        					error={this.state.chipError}
			        					handleChange={this.handleChangeChip}
			        					inputValue={this.state.chip}
			        					inputType="text"/>
			        				<EditDogSelectBreed 
			        					label="Breed:"
			        					error={this.state.breedError}
			        					breed={this.state.breed}
			        					handleChange={this.handleChangeBreed}/>
			        				<EditDogSelectGender 
			        					label="Gender:"
			        					error={this.state.genderError}
			        					gender={this.state.gender}
			        					handleChange={this.handleChangeGender}/>
			        				<EditDogFieldDate 
			        					label="Birthdate:"
			        					error={this.state.birthdateError}
			        					birthdate={this.state.birthdate}
			        					handleChange={this.handleChangeBirthdate}
			        					inputType="date"/>
			        				<EditDogField 
			        					label="Weight:"
			        					error={this.state.weightError}
			        					handleChange={this.handleChangeWeight}
			        					inputValue={this.state.weight}
			        					inputType="text"/>
			        				
			        			</Col>
			                </Row>
						</Modal.Body>
					</Row>

						<Modal.Footer>
							{this.state.tagError || this.state.nameError || this.state.photoError
								? 
								<h5 className="checkError">Red fields required  </h5> 
								: undefined
							}
				            <Button onClick={this.props.onHide}>Close</Button>
				            <Button onClick={this.handleUpdateDog}>Update dog</Button>
				        </Modal.Footer>

			     </Modal>
				)
	}
}

export default NewDog

