import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

import CapitalLetter from '../../../utilities/CapitalLetter'

class DogDetailInfo extends Component{
	constructor(){
		super()

		this.state={
			birthdate:'',
			weightComment:''
		}
	}

	setBithdate = (birthdate) =>{
		this.setState({birthdate})
	}
	setWeightComment = (weightComment) =>{
		this.setState({weightComment})
	}

	loadDate = (birthdate) =>{
		const extractDate =  birthdate.substr(0,10)
		this.setBithdate(extractDate)
	}

	theDogIsMale(){
		if(this.props.dog.gender.toLowerCase() === 'male')
			return true

		return false
	}

	commentWeight = (weight, minWeight, maxWeight) =>{
		if(weight >= minWeight && weight <= maxWeight)
			this.setWeightComment("The weight of your dog it's good")
		else if(weight < minWeight)
			this.setWeightComment("Your dog is skinny!")
		else
			this.setWeightComment("Your dog is fat!")
	}

	loadWeightComment = () =>{
		const weight = this.props.dog.weight

		if(this.theDogIsMale())
			this.commentWeight(weight, this.props.dog.idBreed.weight.male.min, this.props.dog.idBreed.weight.male.max)
		else
			this.commentWeight(weight, this.props.dog.idBreed.weight.female.min, this.props.dog.idBreed.weight.female.max)
	}

	componentDidMount(){
		this.loadDate(this.props.dog.birthdate)
		this.loadWeightComment()
	}
	componentWillReceiveProps(nextProps){
		this.loadDate(nextProps.dog.birthdate)
	}

	render(){
		return(
			<div className="dogDetailInfoContainer">
				<div className="row cursorDefault">
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p data-tip data-for='breed'>
							<strong>Breed: </strong>{this.props.dog.idBreed.name}
						</p>
						<ReactTooltip  id='breed' className={this.props.config.tooltipCss} place="top" effect="solid">
							{"Recommended daily activity: " + this.props.dog.idBreed.activityrecomended}
						</ReactTooltip>
					</div>		
				</div>

				<div className="row cursorDefault">
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p><strong>Gender: </strong>{CapitalLetter(this.props.dog.gender)}</p>
					</div>
				</div>

				<div className="row cursorDefault">
					<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
						<p data-tip data-for='weight'>
							<strong>Weight: </strong>{this.props.dog.weight} kg
						</p>
						<ReactTooltip id='weight' className={this.props.config.tooltipCss} place="top" effect="solid">
							{this.state.weightComment}
						</ReactTooltip>
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

export default DogDetailInfo