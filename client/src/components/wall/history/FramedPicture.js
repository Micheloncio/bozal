import React, {Component} from 'react'

import Photo from './Photo'
import NamePlate from './NamePlate'

class FramedPicture extends Component{

	handleHover = () =>{
		this.props.handleSetGray(false)
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