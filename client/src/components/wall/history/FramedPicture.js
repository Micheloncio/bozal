import React, {Component} from 'react'

import Photo from './Photo'
import NamePlate from './NamePlate'

import Points from '../../../Points'

class FramedPicture extends Component{
	constructor(){
		super()

		this.state={
			idHistory:'',
			hover:false
		}
	}
	setIdHistory = (idHistory) =>{
		this.setState({idHistory})
	}
	setHover = (hover) =>{
		this.setState({hover})
	}

	checkIfItsSameHistory(newId){
		if(this.state.idHistory === newId){
			return true
		}
		return false
	}

	componentDidMount(){
		this.setIdHistory(this.props.idHistory)
	}

	componentWillReceiveProps(nextProps){
		if(!this.checkIfItsSameHistory(nextProps.idHistory)){
			this.setHover(false)
			this.setIdHistory(nextProps.idHistory)
		}
	}

	handleHover = () =>{
		this.props.handleSetGray(false)
		if(this.props.myDogProfile._id)
			if(!this.state.hover){
				this.props.setPoints(Points.seeImage)
				this.setHover(true)
			}
	}

	render(){
		return (
			<div 
				className={
					this.props.gray 
					? 
					"framedPicturePosition filterGray100" 
					: 
					"framedPicturePosition"
				}
				onMouseOver={this.handleHover}
			>
				<Photo 
					config={this.props.config}
					myDogProfile = {this.props.myDogProfile}
					idDog = {this.props.idDog}
					imgDog = {this.props.imgDog}
				/>
				<NamePlate 
					description = {this.props.description}
				/>
			</div>
		)
	}
}

export default FramedPicture