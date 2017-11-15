import React, {Component} from 'react'

import '../../styles/wall/History.css'

import Like from './history/Like'
import Commentaries from './history/Commentaries'
import Dislike from './history/Dislike'
import FramedPicture from './history/FramedPicture'

class History extends Component{
	render(){
		return (
				<div className="marginHistory">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-2 col-md-1 col-lg-1 col-xs-offset-0 col-md-offset-1 col-lg-offset-3">
								<Like/>
								<Commentaries/>
								<Dislike/>
							</div>
							<div className="col-xs-10 col-md-8 col-lg-6 col-xs-offset-0 col-md-offset-1 col-lg-offset-1">
										<FramedPicture 
											nameDog = {this.props.nameDog}
											imgDog = {this.props.imgDog}
										/>
							</div>
							<div className="col-xs-offset-0 col-md-offset-1 col-lg-offset-1">
							</div>
						</div>
					</div>
				</div>
		)
	}
}

export default History