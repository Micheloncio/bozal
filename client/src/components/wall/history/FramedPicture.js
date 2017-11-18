import React, {Component} from 'react'

import Photo from './Photo'
import NamePlate from './NamePlate'

class FramedPicture extends Component{
	render(){
		return (
			<div className="framedPicturePosition">
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