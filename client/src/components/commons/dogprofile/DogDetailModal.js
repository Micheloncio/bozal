import React, {Component} from 'react'
import {Image} from 'react-bootstrap'

import DogDetailInfoModal from './DogDetailInfoModal'
import DogDetailLevelModal from './DogDetailLevelModal'

class DogDetailModal extends Component{

	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-md-6 col-xs-offset-0 col-md-offset-4">
						<Image 
							className="imageDogProfile"
							src={this.props.dog.profilePhoto} 
							circle 
							width="180px"
							height="180px">
						</Image>
					</div>
					<div className="col-xs-0 col-md-2">
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-9 col-xs-offset-0 col-md-offset-3">
						<DogDetailInfoModal
							config={this.props.config} 
							dog={this.props.dog}/>
					</div>
				</div>
				<DogDetailLevelModal
					config={this.props.config} 
					dog={this.props.dog}/>
			</div>
		)
	}
}

export default DogDetailModal