import React, {Component} from 'react'

import Photo from './Photo'
import NamePlate from './NamePlate'

class FramedPicture extends Component{
	constructor(){
		super()
		this.state={
			gray:true
		}
	}

	setGray = (gray) =>{
		this.setState({gray})
	}

	componentWillReceiveProps(){
		this.setGray(true)
	}

	handleHover = () =>{
		this.setGray(false)
	}

	render(){
		return (
			<div 
				className={
					this.state.gray 
					? 
					"framedPicturePosition filterGray100" 
					: 
					"framedPicturePosition"
				}
				onMouseOver={this.handleHover}
			>
				<Photo 
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