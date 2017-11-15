import React, {Component} from 'react'

import '../../styles/wall/History.css'

import Like from './history/Like'
import Commentaries from './history/Commentaries'
import Dislike from './history/Dislike'
import FramedPicture from './history/FramedPicture'

class History extends Component{
	render(){
		return (
			<div className="positionStatic">
				<div className="marginHistory containerHistory">
					<div className="inlineBlock containerButtonsHistory">
							<Like/>
							<Commentaries/>
							<Dislike/>
					</div>
					<div className="containerFramePictureHistory inlineBlock">
							<FramedPicture 
								nameDog = {this.props.nameDog}
								imgDog = {this.props.imgDog}
							/>
					</div>
				</div>
			</div>
		)
	}
}

export default History