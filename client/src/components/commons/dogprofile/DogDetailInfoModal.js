import React, {Component} from 'react'

import CapitalLetter from '../../../utilities/CapitalLetter'

class DogDetailInfoModal extends Component{
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
			<div className="dogDetailInfoContainer">
				<div className="row cursorDefault">
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p><strong>Breed: </strong>{this.props.dog.idBreed.name}</p>
					</div>		
				</div>

				<div className="row cursorDefault">
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p><strong>Gender: </strong>{CapitalLetter(this.props.dog.gender)}</p>
					</div>
				</div>

				<div className="row cursorDefault">
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p data-tip data-for='weight'><strong>Weight: </strong>{this.props.dog.weight} kg</p>
					</div>
				</div>

				<div className="row cursorDefault">
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p><strong>Birthdate: </strong>{this.state.birthdate}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default DogDetailInfoModal