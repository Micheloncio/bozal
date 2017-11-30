import React, {Component} from 'react'

import {Row, Col } from 'react-bootstrap'

import BreedsApi from '../../../../services/BreedsApi'

class NewDogSelectBreed extends Component{

	constructor(){
		super()
		this.state={
			breeds:[]
		}
	}

	setBreeds(breeds){this.setState({breeds})}

	loadBreeds = () => {
		BreedsApi.listBreeds()
			.then(breeds =>{
				this.setBreeds(breeds)
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
					<Col xs={12} md={3}>
						<h4 className={this.props.error ? "checkError" : undefined}>
							{this.props.label}
						</h4>
					</Col>
					<Col xs={12} md={9}>
						<select className="inputNewDog" onChange={this.props.handleChange} defaultValue="">
							<option value=""></option>
							{this.state.breeds.map((breed, index)=>{
								return <option key={index} value={breed._id}>{breed.name}</option>
							})}
						</select>
					</Col>
				</Row>
			</div>
		)
	}
}

export default NewDogSelectBreed