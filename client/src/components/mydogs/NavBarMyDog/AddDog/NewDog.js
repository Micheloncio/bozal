import React, {Component} from 'react'

import {Row, Col, Modal, Button } from 'react-bootstrap'

import DogsApi from '../../../../services/DogsApi'

import NewDogField from './NewDogField'
import NewDogSelectBreed from './NewDogSelectBreed'
import NewDogSelectGender from './NewDogSelectGender'
import NewDogPhoto from './NewDogPhoto'

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
			bithdate:'',
			bithdateError:false,
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
	setBithdate = (bithdate) => {this.setState({bithdate})}
	setBirthdateError = (bithdateError) => {this.setState({bithdateError})}
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
	checkBithdate = () => {
		if(this.state.bithdate)
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
		if(this.state.name && this.state.chip && this.state.breed && this.state.gender && this.state.bithdate && this.state.weight && this.state.dogPhoto)
			return true
	}

	checkNewDog = () =>{

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

		if(!this.checkBithdate())
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

	createNewDog(){
		return DogsApi.createDog(this.state.name, this.props.idUser, this.state.chip, this.state.breed, this.state.gender, this.state.bithdate, this.state.weight, this.state.dogPhoto)
	}

	handleCreateDog = (e) =>{
		if(this.checkNewDog()){
			e.target.disabled = true
			this.createNewDog()
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
	handleChangeBirthdate = (e) =>{
		this.setBithdate(e.target.value)
	}
	handleChangeWeight = (e) =>{
		this.setWeight(e.target.value)
	}
	handleSetDogPhoto = (dogPhoto) =>{
		this.setDogPhoto(dogPhoto)
	}

	render(){
		return (
				<Modal {...this.props}>
					
    				<Modal.Header closeButton>   
    					<h4>New Dog</h4>       					
    				</Modal.Header>
	        		<Row>
	        			<Modal.Body>  
	        				<NewDogPhoto 
	        					photoError={this.state.photoError}
	        					handleSetDogPhoto={this.handleSetDogPhoto}
	        					dogPhoto={this.state.dogPhoto}/>
							<Row>
			        			<Col xs={12} md={12}>
			        				<NewDogField 
			        					label="Name:"
			        					error={this.state.nameError}
			        					handleChange={this.handleChangeName}
			        					inputType="text"/>
			        				<NewDogField 
			        					label="Chip:"
			        					error={this.state.chipError}
			        					handleChange={this.handleChangeChip}
			        					inputType="text"/>
			        				<NewDogSelectBreed 
			        					label="Breed:"
			        					error={this.state.breedError}
			        					handleChange={this.handleChangeBreed}/>
			        				<NewDogSelectGender 
			        					label="Gender:"
			        					error={this.state.genderError}
			        					handleChange={this.handleChangeGender}/>
			        				<NewDogField 
			        					label="Birthdate:"
			        					error={this.state.bithdateError}
			        					handleChange={this.handleChangeBirthdate}
			        					inputType="date"/>
			        				<NewDogField 
			        					label="Weight:"
			        					error={this.state.weightError}
			        					handleChange={this.handleChangeWeight}
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
				            <Button onClick={this.handleCreateDog}>Add dog</Button>
				        </Modal.Footer>

			     </Modal>
				)
	}
}

export default NewDog

