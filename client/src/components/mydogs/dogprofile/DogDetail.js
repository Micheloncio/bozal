import React, {Component} from 'react'

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
		const date = new Date(birthdate)
		const separator = '/'
		const finalDate = date.getDate() + separator + (date.getMonth()+1) + separator + date.getFullYear()
		this.setBithdate(finalDate)
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
					<h2>Breed: {this.props.dog.idBreed.toUpperCase()}</h2>
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