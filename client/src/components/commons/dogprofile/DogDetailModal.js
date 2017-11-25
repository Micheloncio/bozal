import React, {Component} from 'react'
import {Image, Col} from 'react-bootstrap'

import DogDetailInfoModal from './DogDetailInfoModal'
import DogDetailLevelModal from './DogDetailLevelModal'

class DogDetailModal extends Component{

	render(){
		return(
			<div className="container-fluid">
				<div className="textCenter">
					<Image 
						className="imageDogProfile"
						src={this.props.dog.profilePhoto} 
						circle 
						width="180px"
						height="180px">
					</Image>
				</div>
				<Col xs={11} xsOffset={1}>
					<DogDetailInfoModal
						config={this.props.config} 
						dog={this.props.dog}/>
					<DogDetailLevelModal
						config={this.props.config} 
						dog={this.props.dog}/>
				</Col>
			</div>
		)
	}
}

export default DogDetailModal