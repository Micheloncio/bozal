import React, {Component} from 'react'

import CapitalLetter from '../../../utilities/CapitalLetter'

class DogDetail extends Component{
	constructor(){
		super()

		this.state={
			birthdate:''
		}
	}

	setBithdate = (birthdate) =>{
		this.setState({birthdate})
	}

	loadDate = (birthdate) =>{
		const extractDate =  birthdate.substr(0,10)
		this.setBithdate(extractDate)
	}

	componentDidMount(){
		this.loadDate(this.props.dog.birthdate)
	}
	componentWillReceiveProps(nextProps){
		this.loadDate(nextProps.dog.birthdate)
	}

	render(){
		return(
			<div className="container-fluid dogDetailContainer">
				<div className="row">
					<h2>Breed: {this.props.dog.idBreed.name}</h2>
				</div>
				<div className="row">
					<h2>Gender: {CapitalLetter(this.props.dog.gender)}</h2>
				</div>
				<div className="row">
					<h2>Weight: {this.props.dog.weight} kg</h2>
				</div>
				<div className="row">
					<h2>Birthdate: {this.state.birthdate}</h2>
				</div>
				<div className="row">
					<h2>Level: {this.props.dog.level}</h2>
				</div>
				<div className="row">
					<h2>Points: {this.props.dog.points}</h2>
				</div>
				<div className="row">
					<h2>Popularity: {this.props.dog.popularity}</h2>
				</div>
				<div className="row">
					<h2>Agresivity: {this.props.dog.agresivity}</h2>
				</div>
				<div className="row">
					<h2>Sociality: {this.props.dog.sociality}</h2>
				</div>
			</div>
		)
	}
}

export default DogDetail