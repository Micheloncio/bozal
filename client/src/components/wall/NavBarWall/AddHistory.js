import React, {Component} from 'react'

import NewHistory from './NewHistory'

class AddHistory extends Component{
	constructor(){
		super()

		this.state={
			modalShow: false
		}
	}

	setmodalShow = (modalShow) => {
		this.setState({modalShow})
	}

	handleShowHideNewHistory = () => {
		if(this.props.myDogProfile._id)
			this.setmodalShow(!this.state.modalShow)
	}

	render(){
		return (
			<div>
				<div onClick={this.handleShowHideNewHistory} className="addHistory containerAddHistory translateDown cursorPointer">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-6">
								<div className="iconAddHistory glyphicon glyphicon-plus" />
							</div>
							<div className="col-xs-6">
								<div className="iconCamHistory glyphicon glyphicon-camera" /> 
							</div>
						</div>
					</div>
				</div>
					{this.state.modalShow 
						? 
						<NewHistory 
							show={this.state.modalShow} 
							onHide={this.handleShowHideNewHistory}
							dialogClassName="custom-modal"
							tags = {this.props.tags}
							myDogProfile = {this.props.myDogProfile}
							handleLoadNewCurrentTags = {this.props.handleLoadNewCurrentTags}
						/>
						:
						undefined
					}
			</div>
		)
	}
}

export default AddHistory