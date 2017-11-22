import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

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
					<p className="cursorPointer"><strong>Breed: </strong>{this.props.dog.idBreed.name}</p>
				</div>
				<div className="row cursorDefault">
					<p><strong>Gender: </strong>{CapitalLetter(this.props.dog.gender)}</p>
				</div>
				<div className="row cursorPointer">
					<p data-tip="Gordo!"><strong>Weight: </strong>{this.props.dog.weight} kg</p>
					<ReactTooltip place="top" type="light" effect="float"/>

				</div>
				<div className="row cursorDefault">
					<p><strong>Birthdate: </strong>{this.state.birthdate}</p>
				</div>
				<div className="row cursorDefault">
					<p><strong>Level: </strong>{this.props.dog.level}</p>
				</div>
				<div className="row cursorDefault">
					<p><strong>Points: </strong>{this.props.dog.points}</p>
				</div>
				<div className="row cursorDefault">
					<p><strong>Popularity: </strong>{this.props.dog.popularity}</p>
				</div>
				<div className="row cursorDefault">
					<p><strong>Agresivity: </strong>{this.props.dog.agresivity}</p>
				</div>
				<div className="row cursorDefault">
					<p><strong>Sociality: </strong>{this.props.dog.sociality}</p>
				</div>
			</div>
		)
	}
}

export default DogDetail