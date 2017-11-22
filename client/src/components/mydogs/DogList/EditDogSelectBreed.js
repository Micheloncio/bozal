import React, {Component} from 'react'

import {Row, Col } from 'react-bootstrap'

import BreedsApi from '../../../services/BreedsApi'

class EditDogSelectBreed extends Component{

	constructor(){
		super()
		this.state={
			breeds:[],
			itsLoad:false
		}
	}

	setBreeds(breeds){this.setState({breeds})}
	setItsLoad(itsLoad){this.setState({itsLoad})}

	loadBreeds = () => {
		BreedsApi.listBreeds()
			.then(breeds =>{
				this.setBreeds(breeds)
				this.setItsLoad(true)
			})
			.catch(console.error)
	}


	componentDidMount(){
		this.loadBreeds()
	}

	render(){
		return (
			<div className="marginNewDogFields">
				<Row>
					<Col xs={12} md={2}>
						<h4 className={this.props.error ? "checkError" : undefined}>
							{this.props.label}
						</h4>
					</Col>
					<Col xs={12} md={10}>
						{this.state.itsLoad 
							?
							<select onChange={this.props.handleChange} defaultValue={this.props.breed}>
								<option value=""></option>
								{this.state.breeds.map((breed, index)=>{
									return <option key={index} value={breed._id}>{breed.name}</option>
								})}
							</select>
							:
							undefined
						}
					</Col>
				</Row>
			</div>
		)
	}
}

export default EditDogSelectBreed