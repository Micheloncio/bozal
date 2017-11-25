import React, {Component} from 'react'

import DogProfileModal from '../../commons/dogprofile/DogProfileModal'

class Photo extends Component{
	constructor(){
		super()

		this.state={
			modalShow: false
		}
	}

	setmodalShow = (modalShow) => {
		this.setState({modalShow})
	}

	handleShowHideDogProfile= () => {
		if(this.props.myDogProfile._id)
			this.setmodalShow(!this.state.modalShow)
	}

	render(){
		return (
			<div>
				<div onClick={this.handleShowHideDogProfile}>
					<button className="borderButtonHistory blackFrame">
					</button>
				</div>
				<div className="imgDogPosition">
					<img src={this.props.imgDog} width="256px" height="256px"/>
				</div>
				{this.state.modalShow 
					? 
					<DogProfileModal 
						config={this.props.config}
						show={this.state.modalShow} 
						onHide={this.handleShowHideDogProfile}
						dialogClassName="dogProfileModal"
						idDog = {this.props.idDog}
						myDogProfile = {this.props.myDogProfile}
					/>
					:
					undefined
				}
			</div>
		)
	}
}

export default Photo